//------------browse recipe(Home page) image slider-----------------
const browseSlider = document.querySelector(".categories-inner");
const browsePrevBtn = document.getElementById("browse-prev-btn");
const browseNextBtn = document.getElementById("browse-next-btn");
const browseCards = document.querySelectorAll(".category-card");

const browseVisibleCards = 4;
let browseIndex = 0;
const browseCardWidth = browseCards[0].offsetWidth + 20;// Include gap

const browseMoveSlider = () =>{
    browseSlider.style.transform = `translateX(-${browseIndex * browseCardWidth}px)`;
}

browseNextBtn.addEventListener("click", () => {
    if(browseIndex < browseCards.length - browseVisibleCards){
        browseIndex++;
        browseMoveSlider();
    }

});

browsePrevBtn.addEventListener("click", () => {
    if(browseIndex > 0){
        browseIndex--;
        browseMoveSlider();
    }
});

browseMoveSlider();


//-------------------------popular recipe(homepage)-------------------------
const popularSlider = document.querySelector(".popular-recipe-wrapper");
const popularCards = document.querySelectorAll(".popular-recipe-card");
const popularNextBtn = document.getElementById("popular-next-btn");
const popularPrevBtn = document.getElementById("popular-prev-btn");

const popularCardWidth = popularCards[0].offsetWidth + 20;
let popularVisibleCards = 3;
let popularIndex = 0;


const popularMoveSlider = () => {
    popularSlider.style.transform = `translateX(-${popularIndex * popularCardWidth}px)`;
}

popularNextBtn.addEventListener("click" , () =>{
    if(popularIndex < popularCards.length - popularVisibleCards){
        popularIndex++;
        popularMoveSlider();
    }});

    popularPrevBtn.addEventListener("click", () =>{
        if(popularIndex > 0){
            popularIndex--;
            popularMoveSlider();
        }
    });


popularMoveSlider();
