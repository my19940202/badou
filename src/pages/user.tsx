import * as React from "react";
import {Layout, Menu, Form, Icon, Input, Button, Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';
const { Header, Sider } = Layout;

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        }
    }
};

const formItemLayout = {
    labelCol: {
        xs: { span: 12 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    }
};

export default class UserPage extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <Layout>
                <Header className="header">
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1" style={{ color: '#fff', fontSize: 16 }}>
                            <Link to="/index">
                                <Icon type="read" /> 八斗会
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="1">
                                <span>
                                    <Icon type="align-center" />基础信息
                                </span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <span>
                                    <Icon type="security-scan" /> 帐号安全
                                </span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <span>
                                    <Icon type="money-collect" /> 支付绑定
                                </span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>八斗会</Breadcrumb.Item>
                            <Breadcrumb.Item>用户中心</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ width: 800 }}>
                            <Form {...formItemLayout}>
                                <Form.Item label="姓名">
                                    <Input />
                                </Form.Item>
                                <Form.Item label="支付宝帐号">
                                    <Input />
                                </Form.Item>
                                <Form.Item label="电话">
                                    <Input />
                                </Form.Item>
                                <Form.Item label="QQ号">
                                    <Input />
                                </Form.Item>
                                <Form.Item label="E-mail">
                                    <Input />
                                </Form.Item>
                                <Form.Item {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit">
                                        更新
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
    
}