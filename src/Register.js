import React, { useState ,useEffect  } from "react";
import { Input, Space, Button  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Animated} from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Alert } from 'antd';
import Cookies from 'universal-cookie';
import { Redirect } from "react-router-dom";
import {SyncOutlined} from '@ant-design/icons';








const cookies = new Cookies();


export default function Register() {
const [user, setUser] = useState(0);
const [pass, setPass] = useState(0);
const [alt, setAlt] = useState();
const [z, setZ] = useState();

 
  return(
  <>
  
  <br />
 <center>
 <h1>Register</h1>
 <br />
 
    {alt}
<br />
<br />
  <Input placeholder="Email" style={{width:200 }} prefix={<UserOutlined />} onChange= { (e) =>{
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
   setZ(<SyncOutlined spin />)

  console.log(pass)
  console.log(user)
  axios.get(`https://cors-anywhere.herokuapp.com/https://gogamic-api.glitch.me/api/weather/signup?user=${user}&pass=${pass}`)
  .then(res => {
   console.log(res.data)
   if(res.data['status'] == "success") {
     console.log("success")
     cookies.set('Acctype', 'New', { path: '/login' });
     setAlt(<Redirect to='/login'/>)
      setZ()
      //setAlt(<Alert message="Your Account Has Been Created" type="success" />)
  
   }
   else {
     console.log(res.data['error'])
    setAlt(<Alert message={res.data['error']} type="error" />)
   }
    });
   })}> Sign Up {z}</Button>
  <br />
  <small>Aldredy Have an Account? <a href="/login">Login</a> </small>
<br />
{JSON.stringify(location.search)}
 </center>
  </>
  );
}