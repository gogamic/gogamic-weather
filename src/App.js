import React from "react";
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
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
            <title>Page 1</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="path/to/image.jpg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
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
           <Row>
           <BrowserView>
            <Col span={1}><Sidenav /></Col>
          <Col span={23}> <Weather /></Col>
        </BrowserView>
        <MobileView>
             <Col span={1}><Sidenav /></Col>
             <br />
             <br />
             <br />
             <br />
            <br />
             <br />
             <br />
          <Col span={23}> <Weather /></Col>
        </MobileView>
        
        </Row>
           
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}
