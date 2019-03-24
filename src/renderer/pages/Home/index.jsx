import React from 'react';
import { Button, Empty, List, Icon, message } from 'antd';
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

    createFont = () => {
        ipc.send('createFont', {
            fileList: this.state.fileList,
            success: (e) => {
                message.success('iconfont创建成功！~')
            }
        })
    }

    rmFile = (file) => {
        const { fileList } = this.state;
        this.setState({
            fileList: fileList.filter(item => item !== file )
        });
    }

    render () {
        const { fileList } = this.state;
        return (
            <div className="page-home">
                {/* <h2>iconfont 生成工具</h2> */}
                { fileList.length > 0 ? 
                    <SelectedList fileList={fileList}
                        addFiles={this.selectFile}
                        createFont={this.createFont}
                        rmFile={this.rmFile}
                    /> : 
                    <FileEmpty selectFile={this.selectFile} /> }
            </div>
        );
    }
}


function FileEmpty (props) {
    return (
        <Empty description="请选择svg文件" className="empty">
            <Button type="primary" onClick={props.selectFile}>选择文件</Button>
        </Empty>
    );
}

function SelectedList ({ fileList, addFiles, rmFile, createFont }) {
    return (
        <div>
            <div className="list">
                <List
                    size="small"
                    dataSource={fileList}
                    renderItem={item => (
                        <List.Item key={item} className="listItem">
                            <Icon type="file-text" className="iconHead"/>
                            <span className="listCtn">{item}</span>
                            <Icon type="close" className="iconTail" onClick={() => rmFile(item)}/>
                        </List.Item>
                    )}
                />
            </div>
            <div className="footer">
                <Button className="add" onClick={addFiles}>继续添加</Button>
                <Button type="primary" onClick={createFont}>生成iconfont</Button>
            </div>
        </div>
    );
}