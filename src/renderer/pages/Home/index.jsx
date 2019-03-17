import React from 'react';
import { Button } from 'antd';

import './index.scss';

export default class Home extends React.Component {
    render () {
        return (
            <div className="page-home">
                <h2>iconfont 生成工具</h2>
                <Button type="primary">选择文件</Button>
            </div>
        )
    }
}