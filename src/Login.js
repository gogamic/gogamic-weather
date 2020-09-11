import React, { useState ,useEffect  } from "react";
import { Input, Space, Button  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Animated} from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';










firebase.initializeApp({
    apiKey: "AIzaSyDYF-TDi6lXYUC1XAX4soCSYOdNYiLFYHU",
    authDomain: "gogamicc.firebaseapp.com",
    databaseURL: "https://gogamicc.firebaseio.com",
    projectId: "gogamicc",
    storageBucket: "gogamicc.appspot.com",
    messagingSenderId: "527633184497",
    appId: "1:527633184497:web:6c7af6aa3cfdec83541b50",
    measurementId: "G-7EKK4367R4"
  });
firebase.auth();









export default function Login() {
const [user, setUser] = useState(0);
const [pass, setPass] = useState(0);

  
  return(
  <>
  <br />
 <center>
 
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
  
   })}> Sign in</Button>
 
 
 </center>
  </>
  );
}