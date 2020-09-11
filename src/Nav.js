import { Menu } from 'antd';
import {HomeOutlined, GithubOutlined , ContactsOutlined  } from '@ant-design/icons';
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


    if(cookies.get('Token')) {
  console.log(cookies.get('Token'))
  axios.get(`https://cors-anywhere.herokuapp.com/https://gogamic-api.glitch.me/api/weather/token?token=${cookies.get('Token')}`)
  .then(res => {
   console.log(res.data)
  
  
  });
 
}  
else {
  console.log("Not Found")
}
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
         <Menu.Item key="Login" icon={<ContactsOutlined />}>
         Login
        </Menu.Item>
          <Menu.Item key="Register"  icon={<ContactsOutlined />}>
        Register
        </Menu.Item>
    
        
       
       
      </Menu>
    );
  
  }
}

