const nav1 = document.querySelector('.nav1')
const nav2 = document.querySelector('.nav2')
const hambutton = document.querySelector('#menu');
const head= document.querySelector('header')

hambutton.addEventListener('click', () => {
	nav1.classList.toggle('show');
    nav2.classList.toggle('show');
	hambutton.classList.toggle('show');

});

const url="data/character.json";
const cards = document.querySelector('#characters');

getCharacterData(url);

async function getCharacterData(url,filter){
    const response = await fetch(url);
	const data = await response.json();
    const characters= data.characters;
    if (filter==null)
        displayCharacters(characters);
    else if (filter=="earth")
        displayCharacters(characters.filter(character => character.Element == 'Earth'));
    else if (filter=="metal")
        displayCharacters(characters.filter(character => character.Element == 'Metal'));
    else if (filter=="electric")
        displayCharacters(characters.filter(character => character.Element == 'Electric'));
    else if (filter=="fire")
        displayCharacters(characters.filter(character => character.Element == 'Fire'));
    else if (filter=="water")
        displayCharacters(characters.filter(character => character.Element == 'Water'));
    else if (filter=="ice")
        displayCharacters(characters.filter(character => character.Element == 'Ice'));
    else if (filter=="wind")
        displayCharacters(characters.filter(character => character.Element == 'Wind'));
    else if (filter=="dark")
        displayCharacters(characters.filter(character => character.Element == 'Dark'));
    else if (filter=="human")
        displayCharacters(characters.filter(character => character.Element == 'Human'));
};

const displayCharacters = (characters) => {
    document.getElementById("characters").innerHTML = "";
    characters.forEach((character) => {
      let card = document.createElement('section');
      let fullName = document.createElement('h2'); 
      let portrait = document.createElement('img');
  
    //   fullName.textContent = `${character.name}`; 
      portrait.setAttribute('src', character.image);
      portrait.setAttribute('alt', `${character.name} card`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '250');
    //   portrait.setAttribute('height', '440');
        portrait.addEventListener('click',()=>{
             displayCourseDetails(character);
        });
  
      card.appendChild(fullName);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); 
};

const all = document.getElementById("all");
const earth = document.getElementById("earth");
const metal = document.getElementById("metal");
const electric = document.getElementById("electric");
const fire = document.getElementById("fire");
const water = document.getElementById("water");
const ice = document.getElementById("ice");
const wind = document.getElementById("wind");
const dark = document.getElementById("dark");
const human = document.getElementById("human");

all.addEventListener('click', () => {
    getCharacterData(url);
});
earth.addEventListener('click', () => {
    getCharacterData(url, "earth");
});
metal.addEventListener('click', () => {
    getCharacterData(url, "metal");
});
electric.addEventListener('click', () => {
    getCharacterData(url, "electric");
});
fire.addEventListener('click', () => {
    getCharacterData(url, "fire");
});
water.addEventListener('click', () => {
    getCharacterData(url, "water");
});
ice.addEventListener('click', () => {
    getCharacterData(url, "ice");
});
wind.addEventListener('click', () => {
    getCharacterData(url, "wind");
});
dark.addEventListener('click', () => {
    getCharacterData(url, "dark");
});
human.addEventListener('click', () => {
    getCharacterData(url, "human");
});

const courseDetails = document.getElementById('membership-details');

function displayCourseDetails(character){
    courseDetails.innerHTML=``;
    courseDetails.innerHTML=`
    <button id="closeModal">X</button>
    <h2>${character.name}</h2>
    <img src='${character.image}' alt="${character.name} card">
    <div> 
        <div>
            <p><strong>Element: </strong> ${character.Element}</p>
            <p><strong>Archetype:</strong> ${character.Archetype}</p>
        </div>    
        <a  href="transformations.html?chara=${character.name}"><div class="tranbut">Check out its Transformations!</div></a>   
    </div> 
        `;
    courseDetails.showModal();
    closeModal.addEventListener('click',()=>{
        courseDetails.close();
    });
}