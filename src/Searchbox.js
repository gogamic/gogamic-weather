import { Input } from 'antd';
import React from "react";
import { AudioOutlined } from '@ant-design/icons';
import ()

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

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