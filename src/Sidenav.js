import React, {useState} from "react";
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Cookies from 'universal-cookie';
import axios from 'axios';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const { SubMenu } = Menu;

const cookies = new Cookies();

export default function Sidenav() {
const [user, setUser] = useState('User');

 if(cookies.get('Token')) {
      console.log(cookies.get('Token'))
      axios.get(`https://cors-anywhere.herokuapp.com/https://gogamic-api.glitch.me/api/weather/token?token=${cookies.get('Token')}`)
      .then(res => {
      console.log(res.data)
      let c = JSON.parse(res.data)
      console.log(c['email'])
      setUser(c['email'])
    });
}  
else {
   console.log("Not Found")
}
  return (
   <Menu
        onClick={}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <MailOutlined />
              <span>Hello {user}</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <SettingOutlined />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    
  );
}
