import * as React from "react";
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {Switch, Redirect, Route, Link} from 'react-router-dom';
import pageUser from './user';
const { Header, Content, Sider, Footer} = Layout;
import {ArticleTable} from './ArticleTable';
import {AddTpl} from './AddTpl';
import {Login} from './Login';

let table = (title?: string) => {
    return (
        <span>表格组件0</span>
    )
}
let table1 = (title: string) => {
    return (
        <span>表格组件1</span>
    )
}
let table2 = (title: string) => {
    return (
        <span>表格组件2</span>
    )
}

export class App extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        let Index = ({match}: any) => {
            console.log(match, 'match');
            return (
                <Layout>
                    <Header className="header">
                        <div className="user-center">
                            <Link to="/user">
                                <Icon type="user"/> 用户中心
                            </Link>
                        </div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1" style={{ color: '#fff', fontSize: 16 }}>
                                <Icon type="read" /> 八斗会
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
                            {/* 需要动态更新active key */}
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <Menu.Item key="1">
                                    <Link to="/index/articlelist">文章列表</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    营销列表
                                    <Link to="/index/needlist">营销列表</Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    其他列表
                                    <Link to="/index/otherlist">其他列表</Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>八斗会</Breadcrumb.Item>
                                <Breadcrumb.Item>文章列表</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <Route exact={true} path="/index/articlelist" component={ArticleTable}/>
                                <Route exact={true} path="/index/needlist" component={ArticleTable}/>
                                <Route exact={true} path="/index/otherlist" component={ArticleTable}/>
                                <Route exact={true} path="/index/add" component={AddTpl}/>
                            </Content>
                        </Layout>
                    </Layout>
                    {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
                </Layout>
            )
        };
        return (
            // 还是没有完全理解路由的使用情况
            <Switch>
                <Route path="/:one/:two" component={Index} />
                <Route exact={true} path="/user" component={pageUser} />
                <Route exact={true} path="/login" component={Login} />
                <Redirect path="/" to={{pathname: '/index/articlelist'}} />
            </Switch>
        )
    }
}
