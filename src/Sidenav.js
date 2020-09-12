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
          <Menu.ItemGroup key="g1" title="">
          <Menu.Item key="1" onClick={() => {}}><a href="/login">Login</a></Menu.Item>  
          <Menu.Item key="2">Register</Menu.Item>
          {if cookies.get('Token')   ? <Render1Component /> : <Render2Component/>}

          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="">
            <Menu.Item key="3" disabled>Cloud(Coming soon)</Menu.Item>
            <Menu.Item key="4" disabled>API(Coming soon)</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        
      </Menu>
    
  );
}
