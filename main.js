let backgrounds = ['0', '1', '2', '3', '4', '5', '6']
let rugPicsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
let rugPicsArrayCache = false;

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
    preCacheImages();
    rotateBackgroundImage();
    //rugPicHolder.style.display = "block";
}


function rotateRugPic(){
    rugPicHolder.style.opacity = "0";
    let randomRugPic = Math.floor((Math.random() * rugPicsArray.length));
    rugPicHolder.style.backgroundImage = `url(./assets/images/${randomRugPic}.jpg)`;
    rugPicHolder.style.opacity = "1";
}


//setInterval(rotateRugPic, 3000);

function preCacheImages()
{
    for(let i = 0; i < rugPicsArray.length; i++){
        //rugPicHolder.style.backgroundImage = `url(./assets/images/${i}.jpg)`;
        rugPicsArrayCache = true;
    }
}

function templateCarousel(){
    const mainWrapper = document.getElementById("mainWrapper");
    let carouselWrapper = document.createElement('div');
    carouselWrapper.classList.add("carousel-wrapper");
    let carousel = document.createElement('div');
    carousel.classList.add("carousel");
    mainWrapper.appendChild(carouselWrapper);
    carouselWrapper.appendChild(carousel);

    for(let i = 0; i < rugPicsArray.length; i++){
        let image = document.createElement('img');
        if(i === 0){
            image.classList.add("initial");
        }
        image.classList.add("carousel__photo");
        image.src = `./assets/images/${i}.jpg`;
        carousel.appendChild(image);
    }
}

templateCarousel();

!(function(d){
    var itemClassName = "carousel__photo";
        items = d.getElementsByClassName(itemClassName),
        totalItems = items.length,
        slide = 0,
        moving = true;
    
    function setInitialClasses() {
        items[totalItems - 1].classList.add("prev");
        items[0].classList.add("active");
        items[1].classList.add("next");
    }
    /*
    function setEventListeners() {
        var next = d.getElementsByClassName('carousel__button--next')[0],
            prev = d.getElementsByClassName('carousel__button--prev')[0];
        
            next.addEventListener('click', moveNext);
            prev.addEventListener('click', movePrev);
    }
    */
    function moveNext() {
        if (!moving) {
            if (slide === (totalItems - 1)) {
                slide = 0;
            } else {
                slide++;
            }

            moveCarouselTo(slide);
        }
    }

    function movePrev() {
        if (!moving) {
            if (slide === 0 ){
                slide = (totalItems - 1);
            } else {
                slide--;
            }

            moveCarouselTo(slide);
        }
    }

    function disableInteraction() {
        moving = true;

        setTimeout(function(){
            moving = false
        }, 500);
    }

    function moveCarouselTo(slide) {

        if(!moving) {
            disableInteraction();

            var newPrevious = slide - 1,
                newNext = slide + 1,
                oldPrevious = slide - 2,
                oldNext = slide + 2;
            
            if ((totalItems - 1) > 3) {

                if (newPrevious <= 0) {
                    oldPrevious = (totalItems - 1);
                } else if (newNext >= (totalItems - 1)){
                    oldNext = 0;
                }

                if (slide === 0) {
                    newPrevious = (totalItems - 1);
                    oldPrevious = (totalItems - 2);
                    oldNext = (slide + 1);
                } else if (slide === (totalItems - 1)) {
                    newPrevious = (slide - 1);
                    newNext = 0;
                    oldNext = 1;
                }

                items[oldPrevious].className = itemClassName;
                items[oldNext].className = itemClassName;

                items[newPrevious].className = itemClassName + " prev";
                items[slide].className = itemClassName + " active";
                items[newNext].className = itemClassName + " next";
            }
        }
    }

    function initCarousel() {
        setInitialClasses();
        //setEventListeners();

        moving = false;
    }

    initCarousel();
    setInterval(function(){
        if(slide > rugPicsArray.length - 1){
            slide = 0;
        }
        moveCarouselTo(slide++);
    }, 5000);
}(document));

