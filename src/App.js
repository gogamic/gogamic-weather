import React from "react";
import "./style.css";
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import Navbar from './Nav.js';
import Searchbar from './Searchbox.js';


export default function App() {

  return (
    <>
    <Navbar />
    <center>
    <Searchbar />
    </center>
    </>
  );
}
