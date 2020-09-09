import React from "react";

import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import Navbar from './Nav.js';
import Weather from './Weather.js';

export default function App() {

  return (
    <>
    <Navbar />
   
    <Weather />
    </>
  );
}
