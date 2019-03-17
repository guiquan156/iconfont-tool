import React from 'react';
import { Button } from 'antd';
import { ipcRenderer } from 'electron';
import * as ipc from 'services/ipc';

import './index.scss';

export default class Home extends React.Component {

    selectFile = () => {
        ipc.send('selectSvgFile', {
            success: (e, { data }) => {
                const files = data.files;

                console.log(files)
            }
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