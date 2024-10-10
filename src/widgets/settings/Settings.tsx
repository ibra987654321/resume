import React from 'react';
import SettingsExperience from "../../components/settings/settings-experience/SettingsExperience";
import {Layout, Menu, theme} from "antd";
import {Content, Header} from "antd/es/layout/layout";

const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
}));

const Settings = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
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
                        items={items}
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
                        <SettingsExperience/>
                    </div>
                </Content>
            </Layout>
        </div>
    );
};

export default Settings;