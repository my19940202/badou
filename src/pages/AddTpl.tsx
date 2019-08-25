import * as React from "react";
import {Table, Divider, Tag, Button, Icon} from 'antd';

export class AddTpl extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        
        return (
            <>
            {/* 新建页面表单 */}
            <div className="table-operations">
                <Button>新建页面表单</Button>
                <p>新建文本编辑器</p>
            </div>
            {/* 新建文本编辑器 */}

            </>
        )
    }
}
