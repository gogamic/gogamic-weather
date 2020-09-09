import { Input } from 'antd';
import React from "react";
import { AudioOutlined } from '@ant-design/icons';
import ()



export default function Searchbar() {
  return(
  <>
    <Search
      placeholder="Search for a Place"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
      onPressEnter = {(e) => {
      console.log(e)

      }}
     
    />
   
  <br />
   
  </>
 
  );
  }