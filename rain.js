// const apiKey ="74fc5e49c82826e0043b7c8f47ff9d21"

//     const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//     const searchBox = document.querySelector(".search input");
//     const weatherIcon = document.querySelector(".weather-icon")
//     const searchBtn = document.querySelector(".search button");


// async function checkWeather(city){
//     const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
//     var data = await response.json();
        
//     console.log(data);
// document.querySelector(".city").innerHTML = data.name;
// document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c"; 
// document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
// document.querySelector(".wind").innerHTML= data.wind.speed + "km/hr";  

//     if(data.weather[0].main=="clouds"){
//         weatherIcon.src= "images/clouds.png";

//     }else if(data.weather[0].main== "clear"){
//         weatherIcon.src= "images/clear.png";
//     } else if(data.weather[0].main== "rain"){
//         weatherIcon.src= "images/rain.png";
//     }else if(data.weather[0].main== "drizzle"){
//         weatherIcon.src= "images/drizzle.png";
//     }else if(data.weather[0].main== "mist"){
//         weatherIcon.src= "images/mist.png";
// }


// searchBtn.addEventListener("click",()=>{
//     checkWeather(searchBox.value);
// });

// checkWeather(city);
// }