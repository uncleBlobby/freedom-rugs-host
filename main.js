let backgrounds = ['0', '1', '2', '3', '4', '5', '6']
let rugPicsArray = ['0', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

let sections = ["Index", "Rugs", "About", "Contact"];

let activeSection = "Index";

let indexWrapper = document.getElementById("indexWrapper");

let rugsButton = document.getElementById("rugsButton");
let aboutButton = document.getElementById("aboutButton");
let contactButton = document.getElementById("contactButton");

const BG = document.getElementById("blurred-bg");
const rugPicHolder = document.getElementById("rugPics");

BG.style.backgroundImage = `url(./assets/images/${backgrounds[5]}.jpg)`;

function rotateBackgroundImage(){
    let randomBGindex = Math.floor((Math.random() * backgrounds.length));
    BG.style.backgroundImage = `url(./assets/images/${randomBGindex}.jpg)`;
}

window.onload = function() {
    rotateBackgroundImage();
    //rugPicHolder.style.display = "none";
}

function rotateRugPic(){
    let randomRugPic = Math.floor((Math.random() * rugPicsArray.length));
    rugPicHolder.style.backgroundImage = `url(./assets/images/${randomRugPic}.jpg)`;
}


setInterval(rotateRugPic, 2000);

function handleNav(current, target)
{
    current.style.position = "-100vw;";
}
/*
rugsButton.addEventListener("click", function(){
    indexWrapper.style.visibility = "hidden";
    rugPicHolder.style.left = "10vw";
})
*/