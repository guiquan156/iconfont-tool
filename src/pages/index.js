import React from 'react';
import styles from './index.css';
import { Button, Icon } from 'antd';
import { ipcRenderer } from 'electron';

export default class Index extends React.Component {

  state = {
    fileList: []
  }

  pickFile = () => {

  }

  render () {
    return (
      <div>
        <h2>iconfont 生成工具</h2>
        <Button type="primary"
          className={styles.fileBtn}
          onClick={this.pickFile}>
          <Icon type="file-add" /> 选择文件
        </Button>
        <Button type="success">
          <Icon type="smile" theme="twoTone" /> 生成iconfont
        </Button>
      </div>
    );
  }
}
