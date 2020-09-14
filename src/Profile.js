import React, { useState ,useEffect  } from "react";
import axios from 'axios';
import WeatherIcon from 'react-icons-weather';
import { AudioOutlined } from '@ant-design/icons';
import {Animated} from "react-animated-css";
import { Form, Input, Button, Radio } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Cookies from 'universal-cookie';






const cookies = new Cookies();


export default function Profile() {
const [email, setEmail] = useState();
const [user, setUser] = useState();
const [city, setCity] = useState();

 useEffect(()=> { 
   axios.get(`https://gogamic-api.glitch.me/api/weather/token?token=${cookies.get('Token')}`)
    .then(res => {
    //console.log(res.data)
    let c = JSON.parse(res.data)
    console.log(c['email'])
    setUser(c['email'])
    axios.post(`https://gogamic-api.glitch.me/api/weather/db/get?user=${c['email']}`)
    .then(res => {
      console.log(res.data)
      let z = res.data
      setCity(z['city'])
      
     })
    });
  
 }, [])

   const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null;

 
  return(
  <>
  <center>
  <h1> Profle Settings</h1>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{ layout: formLayout }}
        onValuesChange={(v)=>{console.log(v)}}
        style = {{width:400}}
      >
        
        <Form.Item label="Email">
          <Input placeholder="input placeholder"  style={{width:200}} value={user} disabled/>
        </Form.Item>
        
        
        
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>

  </center>
  </>
  );
}