const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{

faders.forEach(element=>{

let position = element.getBoundingClientRect().top;

let screen = window.innerHeight;

if(position < screen - 100){

element.classList.add("show");

}

});


const navbar = document.getElementById("navbar");


if(navbar){

if(window.scrollY > 50){

navbar.classList.add("active");

}else{

navbar.classList.add("active");

}

}

});


// MOBILE MENU

function toggleMenu(){

const menu = document.getElementById("navMenu");

if(menu){

menu.classList.toggle("show");

}

}


// CLOSE MENU AFTER CLICK

document.querySelectorAll("#navMenu a").forEach(link=>{

link.addEventListener("click",()=>{

document
.getElementById("navMenu")
.classList.remove("show");

});

});


// IMAGE MODAL

function openImage(src){

document.getElementById("imageModal").style.display="flex";

document.getElementById("modalImg").src=src;

}


function closeImage(){

document.getElementById("imageModal").style.display="none";

}



// EVENT SLIDER

let currentSlide = 0;

const slides = document.querySelectorAll(".slide");


function showSlide(index){

if(slides.length === 0) return;


slides.forEach(slide=>{

slide.classList.remove("active");

});


slides[index].classList.add("active");

}



function moveSlide(direction){

if(slides.length === 0) return;


currentSlide += direction;


if(currentSlide >= slides.length){

currentSlide = 0;

}


if(currentSlide < 0){

currentSlide = slides.length - 1;

}


showSlide(currentSlide);

}


// AUTO EVENT SLIDE 3 SECONDS

if(slides.length > 0){

setInterval(()=>{

moveSlide(1);

},2000);

}