import React from "react";
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import Navbar from './Nav.js';

import Sidenav from './Sidenav.js';
import Weather from './Weather.js';
import Register from './Register.js';
import Login from './Login.js';
import Profile from './Profile.js';
import Logout from './Logout.js';
import MetaTags from 'react-meta-tags';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {

  return (
  <Router>
      <div>
          <MetaTags>
            <title>Home</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="path/to/image.jpg" />
            <meta name="viewport" content="width=device-width, user-scalable=no" />
            </MetaTags>
          
        
        <Navbar />
        <br />
        
        <Switch>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

           <Route path="/logout">
            <Logout />
          </Route>
        
          <Route path="/">
         <div className="contianer-main">
      <Sidenav />
      <Weather />
         </div>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}
