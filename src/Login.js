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
import {SyncOutlined,} from '@ant-design/icons';







const cookies = new Cookies();



export default function Login() {
   if(cookies.get('Token')){
     return window.location.href = `/`;
   }
   else{
   return window.location.href = `https://accounts.gogamic.com/login?site=https://weather.gogamic.com`;
   }
}