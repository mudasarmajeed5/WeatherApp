async function getData(cityname) {
  const url = 'http://api.weatherapi.com/v1/current.json';
  const apiKey = '9777873c34874dba808131934231812';
  const city = cityname;
  const aqi = 'no';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=9777873c34874dba808131934231812&q=${city}&aqi=no`;
  let x = await fetch(apiUrl);
  let data =await x.json();
  
  
  return data;
}
async function main(cityname){
  console.log("Starting");
  let data =await getData(cityname);
  console.log(data);
  console.log("Data Fetched");
  if (data){
    console.log('Data is loaded');
    document.getElementById("card1city").innerHTML = data.location.name;
    
    if (cityname == "Rawalpindi"){
      document.querySelector(".get_temperature").innerHTML= data.current.temp_c-2;
    }
    else{
      document.querySelector(".get_temperature").innerHTML= data.current.temp_c;
    }
    document.querySelector(".region").innerHTML = data.location.region ;
    document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";
    document.querySelector(".humidity").innerHTML = data.current.humidity;
    document.querySelector(".uv").innerHTML = data.current.uv;
    document.querySelector(".visibility").innerHTML=data.current.vis_km +" km";
    document.getElementById("country").innerHTML = data.location.country;
  }
  else{
    console.log('Data is not loaded');
  }
  console.log("Completed");
}

let city = document.getElementById("submit").addEventListener("click",()=>{
  var city_name = document.getElementById("city").value;
  main(city_name);
}
)





// For islamabad





async function getDataIsl(cityname) {
  const url = 'http://api.weatherapi.com/v1/current.json';
  const apiKey = '9777873c34874dba808131934231812';
  const city = cityname;
  const aqi = 'no';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=9777873c34874dba808131934231812&q=${city}&aqi=no`;
  let x = await fetch(apiUrl);
  let data =await x.json();
  
  
  return data;
}
async function mainisl(citynameIsl){
  console.log("Starting");

  let data =await getData(citynameIsl);
  console.log(data);
  console.log("Data Fetched");
  if (data){
    console.log('Data is loaded');
    document.querySelector(".tempisl").innerHTML= (data.current.temp_c  - 2);
    document.querySelector(".windisl").innerHTML = data.current.wind_kph + " km/h";
    document.querySelector(".uvisl").innerHTML = data.current.uv;
    
  }
  else{
    console.log('Data is not loaded');
  }
  console.log("Completed");
}

mainisl("Islamabad");






//        For Jhang



async function getDatajh(cityname) {
  const url = 'http://api.weatherapi.com/v1/current.json';
  const apiKey = '9777873c34874dba808131934231812';
  const city = cityname;
  const aqi = 'no';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=9777873c34874dba808131934231812&q=${city}&aqi=no`;
  let x = await fetch(apiUrl);
  let data =await x.json();
  
  
  return data;
}
async function mainjh(citynamejh){
  console.log("Starting");

  let data =await getDatajh(citynamejh);
  console.log(data);
  console.log("Data Fetched");
  if (data){
    console.log('Data is loaded');
    document.querySelector(".tempjh").innerHTML= data.current.temp_c;
    document.querySelector(".windjh").innerHTML = data.current.wind_kph + " km/h";
    document.querySelector(".uvjh").innerHTML = data.current.uv;
    
  }
  else{
    console.log('Data is not loaded');
  }
  console.log("Completed");
}
mainjh("Jhang")








//                                For Murree

async function getDatamur(cityname) {
  const url = 'http://api.weatherapi.com/v1/current.json';
  const apiKey = '9777873c34874dba808131934231812';
  const city = cityname;
  const aqi = 'no';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=9777873c34874dba808131934231812&q=${city}&aqi=no`;
  let x = await fetch(apiUrl);
  let data =await x.json();
  
  
  return data;
}
async function mainmur(citynamemur){
  console.log("Starting");

  let data =await getDatamur(citynamemur);
  console.log(data);
  console.log("Data Fetched");
  if (data){
    console.log('Data is loaded');
    document.querySelector(".tempmur").innerHTML= (data.current.temp_c - 3);
    document.querySelector(".windmur").innerHTML = data.current.wind_kph + " km/h";
    document.querySelector(".uvmur").innerHTML = data.current.uv;
    
  }
  else{
    console.log('Data is not loaded');
  }
  console.log("Completed");
}
mainmur("Murree");

