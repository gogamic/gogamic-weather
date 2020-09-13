import React, {useState} from "react";
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Redirect } from "react-router-dom";


const { SubMenu } = Menu;

const cookies = new Cookies();

export default function Sidenav() {
  const { Meta } = Card;

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
   <>
  <center>
       <Card
    style={{ width: 200 }}
    cover={
    
    }
    actions={[
     
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={user}
      description={`Good Eveneing ${user} `}
    />
  </Card>
  </center>
    </>
  );
}
