import React from 'react';
import { Button, Empty, List } from 'antd';
import * as ipc from 'services/ipc';

import './index.scss';

export default class Home extends React.Component {

    state = {
        fileList: []
    }

    selectFile = () => {
        ipc.send('selectSvgFile', {
            success: (e, { data }) => {
                const files = data.files.filter((file) => {
                    return this.state.fileList.indexOf(file) === -1;
                });
                this.setState({
                    fileList: files.concat(this.state.fileList)
                });
            }
        });
    }

    render () {
        const { fileList } = this.state;
        return (
            <div className="page-home">
                <h2>iconfont 生成工具</h2>
                { fileList.length > 0
                    ? <SelectedList fileList={fileList} addFiles={this.selectFile} />
                    : <FileEmpty selectFile={this.selectFile} /> }
            </div>
        )
    }
}


function FileEmpty (props) {
    return (
        <Empty description="请选择svg文件">
            <Button type="primary" onClick={props.selectFile}>选择文件</Button>
        </Empty>
    );
}

function SelectedList ({ fileList, addFiles }) {
    return (
        <div>
            <List
                size="small"
                bordered
                dataSource={fileList}
                renderItem={item => (<List.Item>{item}</List.Item>)}
            />

            <div className="footer">
                <Button className="add" onClick={addFiles}>继续添加</Button>
                <Button type="primary">生成iconfont</Button>
            </div>
        </div>
    );
}