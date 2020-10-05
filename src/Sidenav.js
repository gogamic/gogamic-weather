import React, {useState, useEffect} from "react";
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Switch } from 'antd';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Redirect } from "react-router-dom";
const queryString = require('query-string');


const { SubMenu } = Menu;

const cookies = new Cookies();

export default function Sidenav() {
  const { Meta } = Card;

const [user, setUser] = useState('User');
useEffect(() => {


const parsed = queryString.parse(location.search);
  console.log(JSON.stringify(parsed)); 
  if(parsed['token']) {
    console.log(parsed['token'])
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.gogamic.com/api/weather/token?token=${parsed['token']}`)
    .then(res => {
    console.log(res.data)
    let c = JSON.parse(res.data)
    console.log(c['email'])
    setUser(c['displayName'])
    cookies.set('Token', parsed['token'], { path: '/' });
    window.location.replace('/')
  });
 
}
 else if(cookies.get('Token')) {
   let token = cookies.get('Token')
    axios.get(`https://cors-anywhere.herokuapp.com/https://gogamic-api.glitch.me/api/weather/token?token=${token}`)
    .then(res => {
    console.log(res.data)
    let c = JSON.parse(res.data)
    console.log(c['email'])
    setUser(c['displayName'])

 });
 } 

}, [])
 return (
   <>

       <Card
    className="card"
    cover={}
    actions={[]}
  >
    <Meta
      avatar={/*<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />*/}
      title={user}
      className="card-icon"
      description={`Good Eveneing ${user} `}
    />
  </Card>


 
  
    </>
  );
}
