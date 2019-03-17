import React from 'react';
import { Button } from 'antd';
import { ipcRenderer } from 'electron';

import './index.scss';

export default class Home extends React.Component {

    selectFile = () => {
        ipcRenderer.send('open-directory-dialog', 'openFile');

        ipcRenderer.on('selectedItem', function (e, path) {
            console.log(path);
        });
    }

    render () {
        return (
            <div className="page-home">
                <h2>iconfont 生成工具</h2>
                <Button type="primary" onClick={this.selectFile}>选择文件</Button>
            </div>
        )
    }
}