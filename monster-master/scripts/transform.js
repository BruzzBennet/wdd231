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

const currentUrl = window.location.href;
const everything=currentUrl.split('?');
let formData=everything[1].split('&');

function show(cup){
    formData.forEach((element)=>{
        console.log(element);
        if (element.startsWith(cup)){
            result=element.split('=')[1].replace("%20"," ");
        }

    })
    return(result)
}

let chara=show("chara");

getCharacterData(url);

async function getCharacterData(url,filter){
    const response = await fetch(url);
	const data = await response.json();
    const characters= data.characters;
    displayCharacters(characters.filter(character => character.name == chara));
}

const cards = document.querySelector('#transform');

const displayCharacters = (name) => {
    name.forEach((character) => {
      let card = document.createElement('section');
      let fullName = document.createElement('h2');
      let portrait = document.createElement('img');
    document.getElementById("transform").innerHTML = "";

      portrait.setAttribute('src', character.image);
      portrait.setAttribute('alt', `${character.name} card`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '250');
      portrait.addEventListener('click',()=>{
        displayCourseDetails(character);
        });

      let transform = document.createElement('div');
      character.Transformations.forEach((equip) =>{
            let card1 = document.createElement('section');
            let material = document.createElement("div");
            let icon=document.createElement("img");
            let fullName1 = document.createElement("h3");
            fullName1.innerHTML=`Obtained with:`;
            icon.setAttribute('src', `images/${equip.obtain}.png`);
            icon.setAttribute('alt', `${equip.obtain} Material`);
            icon.setAttribute('loading', 'lazy');
            icon.setAttribute('width', '75');
            // material.appendChild(fullName1);
            material.appendChild(icon);
            let portrait1 = document.createElement('img');
            portrait1.setAttribute('src', equip.image);
            portrait1.setAttribute('alt', `${equip.name} card`);
            portrait1.setAttribute('loading', 'lazy');
            portrait1.setAttribute('width', '250');
            portrait1.addEventListener('click',()=>{
                displayCourseDetails(equip);
           });
            card1.appendChild(material);
            card1.appendChild(portrait1);
            transform.appendChild(card1);
      })

      card.appendChild(fullName);
      card.appendChild(portrait);

      cards.appendChild(card);
      let title = document.createElement("h2");
      title.innerHTML="TRANSFORMATIONS"
      cards.appendChild(title);
      cards.appendChild(transform);
    });
};

const courseDetails = document.getElementById('membership-details');

function displayCourseDetails(character){
    courseDetails.innerHTML=``;    
    if (character.obtain!=null){
        courseDetails.innerHTML=`
        <button id="closeModal">X</button>
        <h2>${character.name}</h2>
        <img src='${character.image}' alt="${character.name} card">
        <div class="Tinfo">
            <p><strong>Obtained with:</strong> ${character.obtain} Material</p>
            <img src="images/${character.obtain}.png" alt="${character.obtain} Material" loading="lazy" class="dialogicon">
        </div>
        `;
    }
    else{
        courseDetails.innerHTML=`
        <button id="closeModal">X</button>
        <h2>${character.name}</h2>
        <img src='${character.image}' alt="${character.name} card">
        <div>
            <p><strong>Element: </strong> ${character.Element}</p>
            <p><strong>Archetype:</strong> ${character.Archetype}</p>
        </div>
        `;
    }
    
    courseDetails.showModal();
    closeModal.addEventListener('click',()=>{
        courseDetails.close();
    });
}