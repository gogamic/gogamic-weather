import { Menu } from 'antd';
import {HomeOutlined, GithubOutlined ,LogoutOutlined,  ContactsOutlined, LoginOutlined, UserAddOutlined} from '@ant-design/icons';
import React , {useState} from "react";
import {Animated} from "react-animated-css";
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

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
        {cookies.get('Token') 
        ? <Menu.Item key="contact" icon={<ContactsOutlined />}>Contact </Menu.Item>
        : <Menu.Item key="Login" icon={<LoginOutlined />}><a href="/login">Login</a></Menu.Item>
        }  
         {cookies.get('Token') 
        ? <Menu.Item key="logout" icon={<LogoutOutlined />}><a href="/logout">Logout </a> </Menu.Item>
        : <Menu.Item key="Register" icon={<UserAddOutlined />}><a href="login">Register</a></Menu.Item>
        }  
       
       
      </Menu>
    );
  
  }
}

