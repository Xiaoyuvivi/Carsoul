const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;

let buttons = document.getElementsByClassName("carousel-actions");
document.getElementById("carousel-button-next") .addEventListener("click", moveToNextslide);
document.getElementById("carousel-button-pre").addEventListener("click", moveToPreslide);

function hideAllSlides(){
    for(let items of slides){
      items.classList.remove("carousel-item-visible");
    items.classList.add("carousel-item-hidden");
    }
    
}

function moveToNextslide(){
    hideAllSlides();
 if (slidePosition=== totalSlides-1){
     slidePosition = 0;
 } else { 
     slidePosition++;
 }

slides[slidePosition].classList.add("carousel-item-visible");
};



function moveToPreslide(){
    hideAllSlides();
    if (slidePosition=== 0){
        slidePosition=totalSlides-1
    } else { 
        slidePosition--;
    
    }  
    slides[slidePosition].classList.add("carousel-item-visible");
}
