import React from "react";
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import Navbar from './Nav.js';
import Weather from './Weather.js';

export default function App() {

  return (
    <>
     <Row>
      <Col span={24}> <Navbar /></Col>
    </Row>
   
    <Row>
      <Col span={24}> <Weather /></Col>
    </Row>
   
    </>
  );
}
