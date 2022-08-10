import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LinearProgress } from '@mui/material';
import reportWebVitals from './reportWebVitals';
import { Box } from '@mui/system';
import {TextField} from "@mui/material/"
import {Button} from "@mui/material"
import styled from "styled-components";
const root = ReactDOM.createRoot(document.getElementById('root'));
const CssTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor"
})((p) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: p.focusColor
  },
  // focused color for input with variant='standard'
  "& .MuiInput-underline:after": {
    borderBottomColor: p.focusColor
  },
  // focused color for input with variant='filled'
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: p.focusColor
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: p.focusColor
    }
  }
}));
const grayscale = {
  color:"#808082",
};
const textStyle = {
  marginTop:"10px",
  left: "10px",
  right: "10px",
  width:"100%",
  fontSize:"18px",
}
const btn = {
  position:"absolute",
   padding:"0px",
   marginTop:"10px",
   left:"14px",
   right:"14px",
   height:"50px",
   width:"10em",
   fontSize:"16.5px",
   width:"100%",
   backgroundColor:"purple",
};
root.render(
  <React.StrictMode>
    <div className='font-sans'>
    <div id="progressBox">
    <LinearProgress></LinearProgress>
    </div>
    <div id="contents">
    <div className='header'>
      <p>Weazone</p>
    </div>
    <hr></hr>
   <p className='text-2xl ml-4 mt-2'>East or west, Weazone is always the best!</p>
   <p className='text-xl ml-4 subpixel-antialiased' style={grayscale}>It's because Weazone gives us the accurate weather of a location. You can get the weather of any city in the world in <span className='medium'>no time.</span> Enter the name of your city and get it's weather</p>
    <form onSubmit={searchWeather}>
    <CssTextField id="cityName" style={textStyle} label="Enter a city name" focusColor="purple" type="text" required></CssTextField>
    <br></br>
    <Button type='submit' variant="contained" style={btn}>Search</Button>
    </form>
    </div>
    </div>
      </React.StrictMode>
);
function searchWeather(e) {
  e.preventDefault();
   const cityName = document.getElementById("cityName").value;
   window.history.pushState(null, "", `/weather/${cityName.toLowerCase()}`);
   document.getElementById("progressBox").style.display = "block";
   document.getElementById("contents").opacity = "0";
   var requestOptions = {
    method: 'GET',
  };
  
  fetch(`https://api.geoapify.com/v1/geocode/search?text=${cityName}&apiKey=b09292142a414493aa0e6147f32a825e`, requestOptions)
    .then(response => response.json())
    .then(result => writeWeather(result, cityName))
    .catch(error => console.log('error', error));
}
function writeWeather(result, cityName) {
  const longitude = result["features"]["0"]["bbox"]["2"];
  const latitude = result["features"]["0"]["bbox"]["1"];
  var requestOptions = {
    method: 'GET',
  };
  alert(`The longitude is ${longitude} and the latitude is ${latitude} of the city ${cityName}`);
}
