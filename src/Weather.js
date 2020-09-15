import React, { useState ,useEffect  } from "react";
import axios from 'axios';
import WeatherIcon from 'react-icons-weather';
import { AudioOutlined } from '@ant-design/icons';
import { Card, Input } from 'antd';
import {Animated} from "react-animated-css";
import {isMobile} from 'react-device-detect';





const { Meta } = Card;





export default function Weather() {


  
 const [lat, setLat] = useState(0);
 const [long, setLong] = useState(0);
 const [temp, setTemp] = useState(0);
 const [max, setMax] = useState(0);
 const [min, setMin] = useState(0);
 const [icon, setIcon] = useState(0);
 const [des, setDes] = useState(0);
 const [city, setCity] = useState(0);
 const [country, setCountry] = useState(0);
  



 useEffect(()=> {
   
const getloction = navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
       axios.get('https://api.openweathermap.org/data/2.5/weather?lat='+ position.coords.latitude + '&lon=' + position.coords.longitude +'&appid=0960c5b80d5e2de5ae4afd6375aec2ce')
      .then(res => {
      const data = res.data;
      console.log(res.data)
      const logo = data.weather[0].icon;
      setTemp(Math.floor(data.main.temp  - 273) + "°C");
      setDes(data.weather[0].description)
      setCity(data.name);
      setCountry(data.sys.country);
      setIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
      setMax("max =" +(Math.floor(data.main.temp_max - 273)));
      setMin("min =" +(Math.floor(data.main.temp_min - 273)));
    });
   
   
  });

     
  }, [])
   let place = city  + "," + country;
  const { Search } = Input;

  const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

  
  return(
  <>
  <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>


  <center>
  <Search
      placeholder="Search for a Place"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
      onSearch = {(value) => {

      console.log(value)
      axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ value +'&appid=0960c5b80d5e2de5ae4afd6375aec2ce')
      .then(res => {
      const data = res.data;
      console.log(res.data)
      const logo = data.weather[0].icon;
      setTemp(Math.floor(data.main.temp  - 273) + "°C");
      setDes(data.weather[0].description)
      setCity(data.name);
      setCountry(data.sys.country);
      setIcon(`https://openweathermap.org/img/w/${logo}.png`)
      setMax("max =" +(Math.floor(data.main.temp_max - 273)));
      setMin("min =" +(Math.floor(data.main.temp_min - 273)));
      console.log(icon)

  })

      }}
     
    />
    </center>
    </Animated>

  <br />
  <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
  <center>
   <Card
    hoverable
    style={{ width: 240 }}
    cover={<img style={{height:150, width:150}} src={icon} />}
  >
    <b><Meta title={temp} description={des} /></b>
   
    <Meta title="" description={max} />
    <Meta title="" description={min} />
    <Meta title="" description={place} />
  </Card>
  </center>
      </Animated>

  </>
  );
}