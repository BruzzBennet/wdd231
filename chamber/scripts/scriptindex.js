document.getElementById("currentyear").innerHTML = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = new Date(document.lastModified);

const navshow = document.querySelector('.navshow')
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', () => {
    navshow.classList.toggle('show');
    hambutton.classList.toggle('show');

});

const url = 'data/members.json';
const cards = document.querySelector('#spotlight');

async function getData(url){
    const response = await fetch(url);
	const data = await response.json();
    const members= data.members;
    displayMembers(members);
};

getData(url);

const displayMembers = (members) => {
    let spotlightmembers = [];
    members.forEach((member) => {
      if (member.level>1){
        spotlightmembers.push(member);
      }
    });
    const randommember1 =spotlightmembers[Math.floor(Math.random() * spotlightmembers.length)];
    let spotlightmembersnew= spotlightmembers.filter(member=>member!=randommember1)
    const randommember2 =spotlightmembersnew[Math.floor(Math.random() * spotlightmembersnew.length)];
    document.getElementById("spotlight").innerHTML = "";
    displayMember(randommember1);
    displayMember(randommember2);
};

function displayMember(array){
        let card = document.createElement('section');
      let div=document.createElement('div');
      let name = document.createElement('h2'); 
      let address = document.createElement('p');
      let number = document.createElement('p');
      let website = document.createElement('a');
      let level = document.createElement('p');
      let portrait = document.createElement('img');
  
      name.textContent = `${array.name}`; 
      address.textContent = `${array.address}`;
      number.textContent = `${array.number}`;
      website.setAttribute('href', array.website);
      website.textContent = `${array.website}`;   
      portrait.setAttribute('src', array.imageurl);
      portrait.setAttribute('alt', `logo of ${array.name}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', 'auto');
      portrait.setAttribute('height', '100');
      if (array.level == 1)
        level.textContent=`Normal member`;
      if (array.level == 2)
        level.textContent=`Silver member`;
      if (array.level == 3)
        level.textContent=`Gold member`;
  
      card.appendChild(portrait);
      div.appendChild(name);
      div.appendChild(address);
      div.appendChild(number);
      div.appendChild(website);
      div.appendChild(level);
      card.appendChild(div);
  
      cards.appendChild(card);
}

const currentTemp = document.querySelector('#current-temp');
const currentTemp1 = document.querySelector('#current-temp1');
const captionDesc = document.querySelector('#weatherdesc');
const humidity = document.querySelector('#humidity');
const tempmin = document.querySelector('#tempmin');
const tempmax = document.querySelector('#tempmax');
const weathertomorrow = document.querySelector('#tomorrow');
const weathertomorrow1 = document.querySelector('#tomorrow1');
const lon="-3.00";
const lan="16.77";
const weatherurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lan}&lon=${lon}&units=metric&appid=e2e370d650b23102b4973a78c410cce6`;
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const weathertomorrowurl = `https://api.openweathermap.org/data/2.5/weather?lat=16.77&lon=-3.00&units=metric&date=${tomorrow.toISOString().split('T')[0]}&appid=e2e370d650b23102b4973a78c410cce6`;
const tomorrow2 = new Date();
tomorrow2.setDate(tomorrow.getDate() + 2);
const weathertomorrowurl2 = `https://api.openweathermap.org/data/2.5/weather?lat=16.77&lon=-3.00&units=metric&date=${tomorrow2.toISOString().split('T')[0]}&appid=e2e370d650b23102b4973a78c410cce6`;

async function apiFetch(){
    try {
        const response = await fetch(weatherurl);
        if (response.ok) {
          const data = await response.json();
          console.log(data); // 
          displayWeatherResults(data);
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
}
apiFetch();

async function apiFetch2(){
  try {
      const response = await fetch(weathertomorrowurl);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // 
        weathertomorrow.textContent=`${data.main.temp}°C`;
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
apiFetch2();

async function apiFetch3(){
  try {
      const response = await fetch(weathertomorrowurl2);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // 
        weathertomorrow1.textContent=`${data.main.temp}°C`;
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
apiFetch3();

const wheatherimg=document.querySelector("#wheatherimg");

function displayWeatherResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    currentTemp1.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    const wheatherIcon = document.createElement('img');
    wheatherIcon.setAttribute('alt', desc);
    wheatherIcon.setAttribute('src', iconsrc);
    wheatherimg.appendChild(wheatherIcon);
    captionDesc.textContent = `${desc}`;
    let humid = data.main.humidity;
    humidity.textContent=`${humid}%`;
    let tempmini = data.main.temp_min;
    tempmin.textContent=`${tempmini}°C`;
    let tempmaxi = data.main.temp_max;
    tempmax.textContent=`${tempmaxi}°C`;
  }