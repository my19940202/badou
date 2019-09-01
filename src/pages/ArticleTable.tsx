import * as React from "react";
import {
    Table, Divider, Tag, Button, Icon,
    Pagination
} from 'antd';
import {Link} from 'react-router-dom';
interface articleInterface {
    pageIdx: number;
    pageSize: number;
    tableData: any[];
    total: number;
}

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
            {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                color = 'volcano';
                }
                return (
                <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
                );
            })}
            </span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
            <a>查看</a>
            <Divider type="vertical" />
            <Icon type="delete" />
            <Divider type="vertical" />
            <Icon type="like" />
            </span>
        ),
    }
];

export class ArticleTable extends React.Component<{}, articleInterface> {
    constructor(props: any) {
        super(props);
        this.state = {
            pageIdx: 1, 
            pageSize: 10,
            tableData: [],
            total: 0
        }
    }

    componentWillMount() {
        this.updateTable();
    }

    tablePagination = (pageIdx) => {
        this.updateTable(pageIdx);
    }

    updateTable = (pageIdx?: number) => {
        pageIdx = pageIdx || this.state.pageIdx;
        let pageSize = this.state.pageSize;
        let url = `/api/table/articles?pageIdx=${pageIdx}&pageSize=${pageSize}`;
        fetch(url, { 
            method: 'GET', 
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        })
        .then((res: any) => res.json())
        .then((data: any) => {
            this.setState({
                tableData: data.data,
                total: data.total
            })
        });
    }

    render() {

        const rowSelection = {
        };
        return (
            <>
            {/* 筛选项 */}
            <div className="table-filter-wrapper" style={{margin: '10px 0'}}>
                <Button type="danger">删除</Button>
                <Button>复制</Button>
                <Button type="primary">提交审核</Button>
                <Link to="/index/add">
                    <Button type="primary" style={{float: 'right'}}>新建</Button>
                </Link>
            </div>
            {/* 表格 */}
            <Table
                rowSelection={rowSelection}
                bordered={true}
                columns={columns}
                dataSource={this.state.tableData}
            />
            <Pagination onChange={this.tablePagination} total={this.state.total} />
            </>
        )
    }
}
