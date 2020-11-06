import React, { Component } from 'react';
import { Menu } from 'antd';
import menuList from '../utils/menuList'

const { SubMenu } = Menu;

class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: '/homepage',
      openKeys: []
    };
  }
  componentDidMount() {
    console.log('menu模块didmount', this.props);
    // 默认展开全部选项
    const filterMenuList = menuList.filter((item) => {
      return item.children
    });
    const openKeys = filterMenuList.map((item) => {return item.key})
    console.log(openKeys,this.props.location.pathname)
    // 默认选中当前路由的菜单
    this.setState({
      openKeys,
      currentMenu: this.props.location.pathname
    })
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      currentMenu: e.key,
    });
    this.props.history.push(e.key)
  }
  openChange = (openKeys) => {
    console.log(openKeys);
    this.setState({openKeys})
  }
  render() {
    return (
      <div className="layout-asider">
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[this.state.currentMenu]}
          onClick={this.handleClick}
          openKeys={this.state.openKeys}
          onOpenChange={this.openChange}
        >
          {
            (menuList || []).map((menuItem) => {
              if (menuItem.children) {
                return (
                  <SubMenu
                    key={menuItem.key}
                    title={
                      <span>{menuItem.name}</span>
                    }
                  >
                    {
                      (menuItem.children || []).map((child) => {
                        return (
                          <Menu.Item key={child.key}>{child.name}</Menu.Item>
                        )
                      })
                    }
                  </SubMenu>
                )
              } else {
                return (
                  <Menu.Item key={menuItem.key}>
                    <span>{menuItem.name}</span>
                  </Menu.Item>
                )
              }
            })
          }
        </Menu>

      </div>
    );
  }
}

export default MenuList;