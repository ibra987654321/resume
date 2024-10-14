import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Modal, Popconfirm, Table, Tag} from "antd";
import {db} from "../../../firebase";
import {collection, doc, getDocs, deleteDoc, updateDoc, addDoc} from "firebase/firestore";
import {ExperienceDataDto} from "../../experience/ExperienceData";
import TextArea from "antd/es/input/TextArea";
import {PlusOutlined, EditOutlined, UserAddOutlined, DeleteOutlined} from "@ant-design/icons";

const SettingsExperience = () => {
    const [dataSource, setDataSource] = useState<ExperienceDataDto[]>([]);
    const [editingKey, setEditingKey] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tags, setTags] = useState<string[]>([]);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [form] = Form.useForm();

    const fetchData = async () => {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, 'experience'));
        const data = querySnapshot.docs.map(doc => ({
            key: doc.id,
            ...doc.data(),
        })) as ExperienceDataDto[];
        setLoading(false);
        const sortedProjects = data.sort((a, b) => {
            return a.position - b.position; // Сравнение по начальной дате
        });
        setDataSource(sortedProjects);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (key: string | "") => {
        await deleteDoc(doc(db, 'experience', key));
        setDataSource(dataSource.filter(item => item.key !== key));
    };

    const handleEdit = (record: ExperienceDataDto) => {
        setTags((prevState) => ([...record.tags]))
        form.setFieldsValue({ ...record });
        setEditingKey(record.key || '');
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        form.resetFields();
        setEditingKey(null);
        setIsModalOpen(true);
    };

    const handleAddTag = () => {
        if (inputValue && !tags.includes(inputValue)) {
            setTags([...tags, inputValue]);
        }
        setInputVisible(false);
        setInputValue('');
    };

    // Удаление тега
    const handleRemoveTag = (removedTag: string) => {
        setTags(tags.filter(tag => tag !== removedTag));
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            const values = await form.validateFields();
            if (editingKey) {
                // Редактирование существующей записи
                const docRef = doc(db, 'experience', editingKey);
                await updateDoc(docRef, {...values, tags});
                setDataSource(prevData =>
                    prevData.map(item =>
                        item.key === editingKey ? { ...values, key: editingKey } : item
                    )
                );
                setLoading(false);
            } else {
                // Добавление новой записи
                const docRef = await addDoc(collection(db, 'experience'), {...values, tags});
                const newKey = docRef.id;
                setDataSource([...dataSource, { ...values, key: newKey }]);
                setLoading(false);
            }
            setIsModalOpen(false);
        } catch (error) {
            console.log('Error saving data: ', error);
            setLoading(false);
        }
    };

    const columns = [
        {
            title: '№',  // Название колонки для нумерации
            dataIndex: 'index',
            key: 'index',
            render: (_value: any, _record: any, index: number) => index + 1,  // Рендерим индекс строки
        },
        {
            title: 'Name',
            dataIndex: 'name_ru',
            key: 'name_ru',
            className: 'break-words'
        },

        {
            title: 'Description',
            dataIndex: 'description_ru',
            key: 'description_ru',
            width: 400,
            className: 'line-clamp-3 break-words'
        },
        {
            title: 'Period',
            dataIndex: 'period_ru',
            key: 'period_ru',
            width: 150,
            className: 'break-words'
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: ExperienceDataDto) => (
                <>
                    <Button onClick={() => handleEdit(record)} style={{ marginRight: 8 }}>
                        <EditOutlined/>
                    </Button>
                    <Popconfirm title="Are you sure to delete?" onConfirm={() => handleDelete(record.key)}>
                        <Button danger><DeleteOutlined/></Button>
                    </Popconfirm>
                </>
            ),
        },
    ];
    return (
        <div>
            <Button type="primary" onClick={handleAdd} style={{marginBottom: 16}}>
                Добавить <UserAddOutlined/>
            </Button>
            <Table dataSource={dataSource} columns={columns} loading={loading} />
            <Modal
                title={editingKey ? 'Изменить' : 'Добавить'}
                visible={isModalOpen}
                onOk={handleSave}
                width='100%'
                onCancel={() => setIsModalOpen(false)}
                loading={loading}
            >
                <Form form={form} layout="vertical" name="form_in_modal" className="grid md:grid-cols-3 gap-2 grid-cols-1">
                    <Form.Item name="name_ky" label="name_ky" rules={[{required: true, message: 'Please input the name!'}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="name_ru" label="name_ru" rules={[{required: true, message: 'Please input the name!'}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="name_en" label="name_en" rules={[{required: true, message: 'Please input the name!'}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="description_ky" label="description_ky" rules={[{required: true}]}>
                        <TextArea className="min-h-28"/>
                    </Form.Item>
                    <Form.Item name="description_ru" label="description_ru" rules={[{required: true}]}>
                        <TextArea className="min-h-28"/>
                    </Form.Item>
                    <Form.Item name="description_en" label="description_en" rules={[{required: true}]}>
                        <TextArea className="min-h-28"/>
                    </Form.Item>
                    <Form.Item name="period_ky" label="period_ky" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="period_ru" label="period_ru" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="period_en" label="period_en" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Tags">
                        <div>
                            {tags.map(tag => (
                                <Tag
                                    closable
                                    onClose={() => handleRemoveTag(tag)}
                                    key={tag}
                                    style={{ marginBottom: 8 }}
                                >
                                    {tag}
                                </Tag>
                            ))}
                            {inputVisible ? (
                                <Input
                                    type="text"
                                    size="small"
                                    style={{ width: 100 }}
                                    value={inputValue}
                                    onChange={e => setInputValue(e.target.value)}
                                    onBlur={handleAddTag}
                                    onPressEnter={handleAddTag}
                                />
                            ) : (
                                <Button
                                    size="small"
                                    type="dashed"
                                    onClick={() => setInputVisible(true)}
                                    icon={<PlusOutlined />}
                                >
                                    Добавить тэг
                                </Button>
                            )}
                        </div>
                    </Form.Item>
                    <Form.Item name="link" label="link" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="position" label="position" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default SettingsExperience;