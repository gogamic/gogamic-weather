import React from "react";
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import Navbar from './Nav.js';
import Weather from './Weather.js';
import Register from './Register.js';
import Login from './Login.js';
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
      
        <Navbar />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        
          <Route path="/">
            <Weather />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}
