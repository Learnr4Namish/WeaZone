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
import {IconButton} from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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
const textStyle2 = {
  marginTop:"10px",
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
function showMainPage() {
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
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <p className='text-xl ml-4'>Developed, designed and created by <b>Namish Kumar</b>, a student of Class 10 of the country India.</p>
      </div>
      </div>
        </React.StrictMode>
  );
  document.body.style = "background:none";
}
showMainPage();
function searchWeather(e) {
  e.preventDefault();
   const cityName = document.getElementById("cityName").value;
   window.history.pushState(null, "", `/weather/${cityName.toLowerCase()}`);
   document.getElementById("progressBox").style.display = "block";
   document.getElementById("contents").opacity = "0";
   var requestOptions = {
    method: 'GET',
  };
  
  fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=2b21d88b4d9463c61364bc0a6dcb9f92`, requestOptions)
    .then(response => response.json())
    .then(result => writeWeather(result, cityName))
    .catch(error => alert(error));
}
function writeWeather(result, cityName) {
  const longitude = result["0"]["lon"];
  const latitude = result["0"]["lat"];
  const apiKey = "2b21d88b4d9463c61364bc0a6dcb9f92";
  let requestOptions = {
    method: 'GET',
  };
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`, requestOptions)
  .then(response => response.json())
  .then(result => showWeather(result, cityName))
  .catch(error => alert(error));
}
function showWeather(result, ctn) {
  console.log(result);
   const cityName = result["name"];
   const cityCountry = result["sys"]["country"];
   const citySunrise = result["sys"]["sunrise"];
   const citySunset = result["sys"]["sunset"];
   const currentTemp = result["main"]["temp"];
   const feelsLike = result["main"]["feels_like"];
   const humidity = result["main"]["humidity"];
   const pressure = result["main"]["pressure"];
   const sea_level = result["main"]["sea_level"];
   const temp_max = result["main"]["temp_max"];
   const temp_min = result["main"]["temp_min"];
   const grnd_level = result["main"]["grnd_level"];
   const gust = result["wind"]["gust"];
   const visibility = result["visibility"];
   const windSpeed = result["wind"]["speed"];
   const windDirectionBase = result["wind"]["deg"];
   const detailsSource=result["base"];
   const countryCodesWithNames = {
    "AF": "Afghanistan",
    "AX": "Aland Islands",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua And Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia",
    "BA": "Bosnia And Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "CV": "Cape Verde",
    "KY": "Cayman Islands",
    "CF": "Central African Republic",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands",
    "CO": "Colombia",
    "KM": "Comoros",
    "CG": "Congo",
    "CD": "Congo, Democratic Republic",
    "CK": "Cook Islands",
    "CR": "Costa Rica",
    "CI": "Cote D\"Ivoire",
    "HR": "Croatia",
    "CU": "Cuba",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "ET": "Ethiopia",
    "FK": "Falkland Islands (Malvinas)",
    "FO": "Faroe Islands",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories",
    "GA": "Gabon",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island & Mcdonald Islands",
    "VA": "Holy See (Vatican City State)",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran, Islamic Republic Of",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle Of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KR": "Korea",
    "KP": "North Korea",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People\"s Democratic Republic",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libyan Arab Jamahiriya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MK": "Macedonia",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia, Federated States Of",
    "MD": "Moldova",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands",
    "AN": "Netherlands Antilles",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestinian Territory, Occupied",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "RE": "Reunion",
    "RO": "Romania",
    "RU": "Russian Federation",
    "RW": "Rwanda",
    "BL": "Saint Barthelemy",
    "SH": "Saint Helena",
    "KN": "Saint Kitts And Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin",
    "PM": "Saint Pierre And Miquelon",
    "VC": "Saint Vincent And Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome And Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia And Sandwich Isl.",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan",
    "SR": "Suriname",
    "SJ": "Svalbard And Jan Mayen",
    "SZ": "Swaziland",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad And Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks And Caicos Islands",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom",
    "US": "United States",
    "UM": "United States Outlying Islands",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "VG": "Virgin Islands, British",
    "VI": "Virgin Islands, U.S.",
    "WF": "Wallis And Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe"
  }
   root.render (
    <React.StrictMode>
    <div className='font-sans'>
    <div id="progressBox">
    <LinearProgress></LinearProgress>
    </div>
    <div id="contents">
    <div className='header'>
    <IconButton aria-label="delete" size="small">
  <ArrowBackIcon onClick={showMainPage} fontSize="medium" />
</IconButton>
      <p>Weazone</p>
    </div>
    <hr></hr>
    <form onSubmit={searchWeather}>
    <CssTextField id="cityName" style={textStyle2} className='ml-6'label="Enter a city name" focusColor="purple" type="text" value={ctn + ", " + countryCodesWithNames[cityCountry]} required></CssTextField>
    </form>
    <p className='ml-6' style={{fontSize:"80px", fontWeight:"bold"}}>{Math.round(Number(currentTemp))}°C</p>
    <p className='text-xl ml-6'>Feels like {Math.round(Number(feelsLike))}°C</p>
    <p className='text-xl ml-6'>Highest/Maximum temperature of the day (During day-time) = <b>{Math.round(Number(temp_max))}°C</b></p>
    <p className='text-xl ml-6'>Minimum/Lowest temperature of the day (During night) = <b>{Math.round(Number(temp_min))}°C</b></p>
    <br></br>
    <hr></hr>
    <br></br>
    <p className='text-xl ml-6'>Humidity Percentage = <b>{humidity}%</b></p>
    <p className='text-xl ml-6'>Current wind speed = <b>{Math.round(Number(windSpeed))} kmph</b> from <b>{getDirection(windDirectionBase)}</b></p>
    <p className='text-xl ml-6'>Country of the city = <b>{countryCodesWithNames[cityCountry]}</b></p>
    <p className='text-xl ml-6'>Visibility = <b>{Math.round(Number(visibility/1000))} KM</b></p>
    <p className='text-xl ml-6'>Pressure now = <b>{pressure} mBar</b></p>
    <br></br>
    <hr></hr>
    <br></br>
    <p className='text-xl ml-6'>Got any wrong or fake weather information? Please request the same issue below. Every suggestion is completely accepted.</p>
    <Button type='submit' variant="contained" style={btn}>Report an issue</Button>
    <br></br>
    <br></br>
    </div>
    </div>
    <br></br>
    <br></br>
    </React.StrictMode>
   );
   document.getElementById("progressBox").style.display = "none";
}
function getDirection(angle) {
  var directions = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'];
  var index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
  return directions[index];
}
