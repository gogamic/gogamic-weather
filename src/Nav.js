import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  ContactsOutlined,
  HomeOutlined, 
  GithubOutlined ,
} from '@ant-design/icons';
import React from "react";

const { SubMenu } = Menu;

export default class Navbar extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
           Home
          </Menu.Item>
          <Menu.Item key="2" icon={<GithubOutlined />}>
           Github
          </Menu.Item>
          <Menu.Item key="3" icon={<ContactsOutlined />}>
           Contact
          </Menu.Item>
        
        </Menu>
      </div>
    );
  }
}

