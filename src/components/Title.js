import React, { Component } from 'react';
import { withRouter } from 'react-router' // 为了实时监听路由变化来做面包屑
import menuConfig from '../router/config'
import { Icon } from 'antd'

class Title extends Component {
  findTargetObj = (list) => {
    let obj = null;
    list.forEach((item) => {
      if (this.props.location.pathname === item.path) {
        obj = item
      }
    })
    return obj
  }
  goBack = () => {
    this.props.history.go(-1)
  }
  render() {
    const targetObj = this.findTargetObj(menuConfig)
    console.log('面包屑title render', targetObj);
    return (
      <div className="bread-title">
        {
          targetObj.showBack
            ? (
              <div style={{ display: 'flex', alignItems: 'center', color: '#1890ff', cursor: 'pointer' }}>
                <Icon type="left" />
                <span onClick={this.goBack}>返回</span>
              </div>
            )
            : null
        }
        {
          targetObj.showBack
            ? (
              <span style={{ fontWeight: 'bold', margin: ' 0 15px' }}>|</span>
            )
            : null
        }
        <div style={{ fontWeight: 'bold' }}>{(targetObj || {}).title}</div>
      </div>
    );
  }
}

export default withRouter(Title);