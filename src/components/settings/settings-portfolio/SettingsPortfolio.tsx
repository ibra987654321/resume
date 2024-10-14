import React, {useEffect, useState} from 'react';
import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore";
import {getDownloadURL, ref, uploadBytes, UploadMetadata} from "firebase/storage"
import {db, storage} from "../../../firebase";
import {ExperienceDataDto} from "../../experience/ExperienceData";
import {Button, Form, Input, Modal, Popconfirm, Table, Upload} from "antd";
import {DeleteOutlined, EditOutlined, UploadOutlined, UserAddOutlined} from "@ant-design/icons";
import { UploadRequestOption } from 'rc-upload/lib/interface';

const SettingsPortfolio = () => {

    const [form] = Form.useForm();

    const [dataSource, setDataSource] = useState<any[]>([]);
    const [editingKey, setEditingKey] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fileList, setFileList] = useState<any[]>([]);

    const fetchData = async () => {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, 'portfiolio'));

        const promises = querySnapshot.docs.map(async (doc) => {
            return {
                ...doc.data(),
                key: doc.id,
            };
        });

        const results = await Promise.all(promises);
        setDataSource((prev) => [ ...results]);
        setLoading(false);
    };


    useEffect(() => {
        fetchData();
        console.log(fileList)
    }, [fileList]);

    const handleDelete = async (key: string | "") => {
        await deleteDoc(doc(db, 'portfiolio', key));
        setDataSource(dataSource.filter(item => item.key !== key));
    };

    const handleEdit = async (record: any) => {
        form.setFieldsValue({ ...record });
        setEditingKey(record.key || '');
        const imageUrl = await getDownloadURL(ref(storage, `gs://mysite-79cac.appspot.com/images/${record.img}`));
        setFileList([imageUrl])
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        form.resetFields();
        setEditingKey(null);
        setIsModalOpen(true);
    };


    const handleSave = async () => {
        setLoading(true);
        try {
            const values = await form.validateFields();


            if (editingKey) {
                // Редактирование существующей записи
                if (typeof values.image === "object") {
                    values.img = values.image.file.name;
                }
                const docRef = doc(db, 'portfiolio', editingKey);
                const foundItem = dataSource.find(item => item.key === editingKey);
                const metadata: UploadMetadata = {
                    contentType: values.image.file.originFileObj.type,  // MIME тип берется из загружаемого файла
                };
                const filePath =  `images/${foundItem.img}`;
                const fileRef = ref(storage, filePath);
                // @ts-ignore
                await uploadBytes(fileRef, values.image.file.originFileObj, metadata);
                await updateDoc(docRef, values);
                setDataSource(prevData =>
                    prevData.map(item =>
                        item.key === editingKey ? { ...values, key: editingKey } : item
                    )
                );
                setLoading(false);
            } else {
                // Добавление новой записи
                const docRef = await addDoc(collection(db, 'portfiolio'), {...values});
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

    const handleUpload = async (options: UploadRequestOption<{}>) => {
        const { file, onSuccess, onError } = options;
        try {
            // 1. Создаем ссылку на файл в Firebase Storage
            // @ts-ignore
            const storageRef = ref(storage, `images/${file.name}`);

            // 2. Загружаем файл
            // @ts-ignore
            await uploadBytes(storageRef, file);

            // 3. Получаем URL загруженного файла
            const fileURL = await getDownloadURL(storageRef);

            // 4. Успешная загрузка
            if (onSuccess) {
                onSuccess("Файл успешно загружен!");
            }

            return fileURL;  // Возвращаем URL для дальнейшего использования
        } catch (error) {
            if (onError) {
                console.error('Ошибка при загрузке файла:', error);
            }
            console.error('Ошибка при загрузке файла:', error);
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
            dataIndex: 'name',
            key: 'name',
            className: 'break-words'
        },
        {
            title: 'Color',
            dataIndex: 'bgColor',
            key: 'bgColor',
            className: 'break-words'
        },
        {
            title: 'Url',
            dataIndex: 'url',
            key: 'url',
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
        <>
            <Button type="primary" onClick={handleAdd} style={{marginBottom: 16}}>
                Добавить <UserAddOutlined/>
            </Button>
            <Table dataSource={dataSource} columns={columns} loading={loading}/>
            <Modal
                title={editingKey ? 'Изменить' : 'Добавить'}
                visible={isModalOpen}
                onOk={handleSave}
                width='100%'
                onCancel={() => setIsModalOpen(false)}
                loading={loading}
            >
                <Form form={form} layout="vertical" name="form_in_modal"
                      className="grid md:grid-cols-3 gap-2 grid-cols-1">
                    <Form.Item name="name" label="name" rules={[{required: true, message: 'Please input the name!'}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="bgColor" label="bgColor"
                               rules={[{required: true, message: 'Please input the name!'}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="url" label="url" rules={[{required: true, message: 'Please input the name!'}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="image" label="image" rules={[{required: true, message: 'Please input the name!'}]}>
                        <Upload
                            listType="picture"
                            maxCount={1}
                        >
                            <Button icon={<UploadOutlined/>}>Upload (Max: 1)</Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default SettingsPortfolio;