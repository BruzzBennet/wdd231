const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');


async function getProphetData(url,filter){
    const response = await fetch(url);
	const data = await response.json();
    const prophets= data.prophets;
    if (filter==null)
        displayProphets(prophets);
    else if (filter=="utah")
        displayProphets(prophets.filter(prophet => prophet.birthplace == 'Utah'));
    else if (filter=="us")
        displayProphets(prophets.filter(prophet => prophet.birthplace == 'England'));
    else if (filter=="children")
        displayProphets(prophets.filter(prophet => prophet.numofchildren > 10));
    else if (filter=="serve")
        displayProphets(prophets.filter(prophet => prophet.length > 15));
    else if (filter=="year")
        displayProphets(prophets.filter(prophet => getAgeAtDeathInYears(prophet.birthdate, prophet.death) >= 95));
    
};

const all = document.querySelector('#all');
const utah = document.querySelector('#Utah');
const us = document.querySelector('#US');
const year = document.querySelector('#year');
const child = document.querySelector('#child');
const serve = document.querySelector('#serve');

getProphetData(url);

all.addEventListener('click', () => {
    getProphetData(url);
});

utah.addEventListener('click', () => {
    getProphetData(url, "utah");
});

us.addEventListener('click', () => {
    getProphetData(url, "us");
});

year.addEventListener('click', () => {
    getProphetData(url, "year");
});

child.addEventListener('click', () => {
    getProphetData(url, "children");
});

serve.addEventListener('click', () => {
    getProphetData(url, "serve");
});

function getAgeAtDeathInYears(birthdate, deathdate) {
	let birth = new Date(birthdate);
	let death = new Date(deathdate);
	if (deathdate === null) {
		death = new Date();
	}
	return Math.floor((death - birth) / (365 * 24 * 60 * 60 * 1000));
}

const displayProphets = (prophets) => {
    document.getElementById("cards").innerHTML = "";
    prophets.forEach((prophet) => {
      let card = document.createElement('section');
      let fullName = document.createElement('h2'); 
      let portrait = document.createElement('img');
  
      fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      card.appendChild(fullName);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); 
};