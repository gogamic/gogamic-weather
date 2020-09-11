import { Menu } from 'antd';
import {HomeOutlined, GithubOutlined , ContactsOutlined  } from '@ant-design/icons';
import React from "react";
import {Animated} from "react-animated-css";


const { SubMenu } = Menu;

export default class Navbar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="github" icon={<GithubOutlined />}>
          Github
        </Menu.Item>
        <Menu.Item key="contact" icon={<ContactsOutlined />}>
         Contact Us
        </Menu.Item>
       
       
      </Menu>
    );
  
  }
}

