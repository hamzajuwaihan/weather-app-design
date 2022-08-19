feather.replace();
// // 
// let apiKey = 'f031ccafb27cb66dcd178c6209aa9d59';
// let lat = null;
// let lon = null;
// let city = 'amman';
// let country ='';
// let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;

// async function fetchWeatherStatus() {
//     const response = await fetch(url);
//     if (!response.ok) {
//       const message = `An error has occured: ${response.status}`;
//       throw new Error(message);
//     }
//     const data = await response.json();
//     return weather;
//   }

// fetch(url).then((response)=>{
//   return response.json();
// }).then((data)=>{
   
//     lat = data[0].lat;
//     lon = data[0].lon;
//     city = data[0].name;
//     country = data[0].country;
//     console.log(data,lat,lon , city,country)
// })
// console.log(lat,lon , city,country)
// url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
// fetch(url).then((response)=>{return response.json()}).then((data)=>{
//     console.log(data)
// })
const city = document.querySelector("#city");
const cityName = document.querySelector(".location");
const Temp = document.querySelector(".weather-temp");
const main = document.querySelector("#main");
const discription = document.querySelector(".weather-desc");
const h=document.getElementById("HUMIDITY");
const p=document.getElementById("pressure")
const input = document.querySelector("#city");
const w=document.getElementById("WIND");
const day=document.querySelector(".date-dayname")
const date=document.querySelector(".date-day")
const d=new Date().toLocaleDateString;

input.onchange = (e) => {
  e.preventDefault();
  weatherUpdate(city.value);
  city.value = "";
};

weatherUpdate = (city) => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f031ccafb27cb66dcd178c6209aa9d59`);


  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 404) {
      alert("Place not found");
    } else {
      var data = JSON.parse(xhr.response);
      console.log(data)
      cityName.innerHTML = data.name;
      Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
    
      discription.innerHTML = data.weather[0].description;
      p.innerHTML=data.main.pressure+" psi"
      w.innerHTML=data.wind.speed+" km/h"
      h.innerHTML=data.main.humidity+"%"
      day.innerHTML= new Date().toLocaleDateString('en-us', { weekday:"long"});
      

      date.innerHTML=new Date().toLocaleDateString('en-gb');

   
    }
  };
};

weatherUpdate("patna");