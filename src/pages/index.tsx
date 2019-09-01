import * as React from "react";
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {Route, Link} from 'react-router-dom';
const { Header, Content, Sider, Footer} = Layout;
import {ArticleTable} from './ArticleTable';
import {AddTpl} from './AddTpl';

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
interface IndexProps {

}

interface IndexState {
    selectedItem: string[];
}

export class Index extends React.Component<{}, IndexState> {
    constructor(props: any) {
        super(props);
        if (props.match.params) {
            this.state = {
                selectedItem: [props.match.params.pages]
            }
        }
    }
    componentWillReceiveProps(nextProps: any) {
        if (nextProps.match.params) {
            this.setState({
                selectedItem: [nextProps.match.params.pages]
            });
        }
    }

    render() {
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
                        style={{lineHeight: '64px'}}
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
                            defaultSelectedKeys={['articlelist']}
                            selectedKeys={this.state.selectedItem}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="articlelist">
                                <Link to="/index/articlelist">文章列表</Link>
                            </Menu.Item>
                            <Menu.Item key="needlist">
                                营销列表
                                <Link to="/index/needlist">营销列表</Link>
                            </Menu.Item>
                            <Menu.Item key="otherlist">
                                其他列表
                                <Link to="/index/otherlist">其他列表</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>八斗会</Breadcrumb.Item>
                            {/* 二级标题需要动态update */}
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
                            <Route exact={true} path="/index/needlist" component={table1}/>
                            <Route exact={true} path="/index/otherlist" component={table}/>
                            <Route exact={true} path="/index/add" component={AddTpl}/>
                        </Content>
                    </Layout>
                </Layout>
                {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
            </Layout>
        )
    }
}
