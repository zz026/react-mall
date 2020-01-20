import React, { Component } from 'react'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

export default class Home extends Component {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  state = {
    openKeys: ['sub1'],
  };

  componentWillMount() {
  }

  render() {
    return (
      <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          style={{ width: 256 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
        </Menu>
    )
  }
}
