import React from 'react';
import {Layout, Menu, theme} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import {useNavigate} from "react-router-dom";


const menu = [
    {
        key: 1,
        label: 'Experience',
        url: '/settings/experience',
    },
    {
        key: 2,
        label: 'Portfolio',
        url: '/settings/portfolio',
    }
]

// @ts-ignore
export const Settings = ({children}) => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate = useNavigate();

    // Обработчик клика по элементам меню
    const handleClick = (e: any) => {
        const selectedMenu = menu.find(item => item.key.toString() === e.key);
        if (selectedMenu) {
            navigate(selectedMenu.url); // Навигация по маршруту
        }
    };


    return (
        <div>
            <Layout>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Header
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <div className="demo-logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={menu}
                        onClick={handleClick}
                        style={{ flex: 1, minWidth: 0 }}
                    />
                </Header>
                <Content style={{ padding: '20px 48px' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: '100vh',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content>
            </Layout>
        </div>
    );
};

