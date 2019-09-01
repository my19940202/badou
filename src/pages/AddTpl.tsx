import * as React from "react";
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import {Table, Divider, Tag, Button, Icon} from 'antd';

interface AddTplState {
    editorState: any;
}
const defaluTplContent = `
<h3>defaultValue</h3>
<p>defaultValue属性与value属性类似，但是它只在首次传入有效editorState时生效，用于指定编辑器的默认内容。如果需要异步或动态修改编辑器的内容，推荐使用value属性。</p>
`
export class AddTpl extends React.Component<{}, AddTplState> {
    handleEditorChange = (editorState) => {
        this.setState({editorState})
    }

    submitContent = async () => {
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        if (this.state.editorState) {
            const htmlContent = this.state.editorState.toHTML()
            console.log(htmlContent, 'saveEditorContent');
        }
      }

    constructor(props: any) {
        super(props);
        this.state = {
            editorState: BraftEditor.createEditorState(defaluTplContent)
        };
    }
    render() {
        return (<>
            <div>
                <p>新建模板</p>
                <BraftEditor
                    value={this.state.editorState}
                    onChange={this.handleEditorChange}
                    onSave={this.submitContent}
                />
                <Button>保存模板</Button>
            </div>
        </>)
    }
}
