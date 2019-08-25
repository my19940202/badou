import * as React from "react";
import {Table, Divider, Tag, Button, Icon} from 'antd';
import {Link} from 'react-router-dom';

export class ArticleTable extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
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
          
        const data = [
            {
              key: '1',
              name: '星巴克猫爪杯推荐',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              name: '秋季新品上市推荐',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              name: '夏季新品上市推荐',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
            {
              key: '4',
              name: '夏季新品上市推荐',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
            {
              key: '11',
              name: '星巴克猫爪杯推荐',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '222',
              name: '秋季新品上市推荐',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '313',
              name: '夏季新品上市推荐',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
            {
              key: '111',
              name: '星巴克猫爪杯推荐',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '212',
              name: '秋季新品上市推荐',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '323',
              name: '夏季新品上市推荐',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            }
          ];
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
            <Table rowSelection={rowSelection} bordered={true} columns={columns} dataSource={data} />
            </>
        )
    }
}
