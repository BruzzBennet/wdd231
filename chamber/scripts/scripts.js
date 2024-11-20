document.getElementById("currentyear").innerHTML = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = new Date(document.lastModified);

const navshow = document.querySelector('.navshow')
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', () => {
    navshow.classList.toggle('show');
    hambutton.classList.toggle('show');

});

const url = 'data/members.json';
const cards = document.querySelector('#members');

async function getData(url){
    const response = await fetch(url);
	const data = await response.json();
    const members= data.members;
    displayMembers(members);
};

getData(url);


const displayMembers = (members) => {
    document.getElementById("members").innerHTML = "";
    members.forEach((member) => {
      let card = document.createElement('section');
      let div=document.createElement('div');
      let name = document.createElement('h2'); 
      let address = document.createElement('p');
      let number = document.createElement('p');
      let website = document.createElement('a');
      let level = document.createElement('p');
      let portrait = document.createElement('img');
  
      name.textContent = `${member.name}`; 
      address.textContent = `${member.address}`;
      number.textContent = `${member.number}`;
      website.setAttribute('href', member.website);
      website.textContent = `${member.website}`;   
      portrait.setAttribute('src', member.imageurl);
      portrait.setAttribute('alt', `logo of ${member.name}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', 'auto');
      portrait.setAttribute('height', '100');
      if (member.level == 1)
        level.textContent=`Normal member`;
      if (member.level == 2)
        level.textContent=`Silver member`;
      if (member.level == 3)
        level.textContent=`Gold member`;
  
      card.appendChild(portrait);
      div.appendChild(name);
      div.appendChild(address);
      div.appendChild(number);
      div.appendChild(website);
      div.appendChild(level);
      card.appendChild(div);
  
      cards.appendChild(card);
    }); 
};

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
	// example using arrow function
	cards.classList.add("grid");
	cards.classList.remove("list");
});

listbutton.addEventListener("click", () => {
	cards.classList.add("list");
	cards.classList.remove("grid");
});