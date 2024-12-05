document.getElementById("currentyear").innerHTML = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = new Date(document.lastModified);

const navshow = document.querySelector('.navshow')
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', () => {
    navshow.classList.toggle('show');
    hambutton.classList.toggle('show');

});

if(localStorage.getItem("lastVisited")==null){
    document.getElementById("lastDate").innerHTML = "Welcome! Let us know if you have any questions.";
    localStorage.setItem("lastVisited", new Date());
}
else{
    const lastVisited = new Date(localStorage.getItem("lastVisited"));
    // const lastVisited = new Date("12/01/2024");
    let newDate= new Date()
    let Difference_In_Time = newDate.getTime() - lastVisited.getTime();
    let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
    if (Difference_In_Days>0)
        document.getElementById("lastDate").innerHTML = `You last visited ${Difference_In_Days} days ago.`;
    else
        document.getElementById("lastDate").innerHTML = `Back so soon! Awesome!`;
    let yourDate = new Date();
    localStorage.setItem("lastVisited", yourDate);
}

function datediff(first, second) {        
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}