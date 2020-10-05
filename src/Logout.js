import React, { useState ,useEffect  } from "react";
import axios from 'axios';
import WeatherIcon from 'react-icons-weather';
import { AudioOutlined } from '@ant-design/icons';
import {Animated} from "react-animated-css0";
import { Form, Input, Button, Radio } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Cookies from 'universal-cookie';
import { Redirect } from "react-router-dom";






const cookies = new Cookies();


export default function Profile() {
 cookies.remove('Token')
  return(window.location.replace('/'));
}