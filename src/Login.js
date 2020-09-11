import React, { useState ,useEffect  } from "react";
import { Input, Space, Button  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Animated} from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Alert } from 'antd';
import { Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';







const cookies = new Cookies();



export default function Login() {
const [user, setUser] = useState(0);
const [pass, setPass] = useState(0);
const [alt, setAlt] = useState();

if(cookies.get('Token')) {
  console.log(cookies.get('Token'))
  return <Redirect to='/'/>;
}  
else {
  console.log("Not Found")
}
  return(
  <>
  
  <br />
 <center>
  <h1>Login</h1>
<br />
    {alt}
<br />
<br />
  <Input placeholder="Username" style={{width:200 }} prefix={<UserOutlined />} onChange= { (e) =>{
  setUser(e.target.value)
  }} />
  <br />
  <br />
   
  <Input.Password placeholder="input password" style={{width:200 }} prefix={<FontAwesomeIcon icon={faKey} />} onChange= { (e) =>{
  setPass(e.target.value)
  }} />
   <br />
   <br />
   <Button type="primary" onClick = {(() =>{
  console.log(pass)
  console.log(user)
  axios.get(`https://cors-anywhere.herokuapp.com/https://gogamic-api.glitch.me/api/weather/signin?user=${user}&pass=${pass}`)
  .then(res => {
   console.log(res.data)
   
   if(res.data['status'] == null) {
     console.log("success")
       if(res.data['verified'] == "no") {
    setAlt(<Alert message="Please Verify Your Mail" type="info" />)
   }
   else {
     cookies.set('Token', res.data['token'], { path: '/' });
     console.log(cookies.get('Token')); // Pacman

         setAlt(<Alert message="Your Account Has Been Created" type="success" />)
   }
  
   }
 
   else {
     console.log(res.data['error'])
    setAlt(<Alert message={res.data['error']} type="error" />)
   }
    });
   })}> Sign In</Button>
 <br />
 
 </center>
  </>
  );
}