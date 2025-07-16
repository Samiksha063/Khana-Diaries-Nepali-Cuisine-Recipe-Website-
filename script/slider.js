//------------browse recipe(Home page) image slider-----------------
const browseSlider = document.querySelector(".categories-inner");
const browsePrevBtn = document.getElementById("browse-prev-btn");
const browseNextBtn = document.getElementById("browse-next-btn");
const browseCards = document.querySelectorAll(".category-card");

let browseIndex = 0;

function getBrowseCardWidth() {
  return browseCards[0].offsetWidth + 20;
}

function getVisibleCards(){
    const width = window.innerWidth;
    if(width <= 768){ return 1;}
    else{ return 4;}
}
const browseMoveSlider = () =>{
    const browseCardWidth = getBrowseCardWidth();
    browseSlider.style.transform = `translateX(-${browseIndex * browseCardWidth}px)`;
}

browseNextBtn.addEventListener("click", () => {
    const browseVisibleCards = getVisibleCards();
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

window.addEventListener("resize", () => {
  const browseVisibleCards = getVisibleCards();
  if (browseIndex > browseCards.length - browseVisibleCards) {
    browseIndex = Math.max(0, browseCards.length - browseVisibleCards);
  }
  browseMoveSlider();
});
browseMoveSlider();

//-------------------------popular recipe(homepage)-------------------------
const popularSlider = document.querySelector(".popular-recipe-wrapper");
const popularCards = document.querySelectorAll(".popular-recipe-card");
const popularNextBtn = document.getElementById("popular-next-btn");
const popularPrevBtn = document.getElementById("popular-prev-btn");

let popularIndex = 0;

function getPopularCardWidth(){
    return popularCards[0].offsetWidth + 20;
}

function getPopularVisibleCards(){
    const width = window.innerWidth;
    if(width <= 768){
        return 1;
    }else{
        return 3;
    }
}


const popularMoveSlider = () => {
    const popularCardWidth = getPopularCardWidth();
    popularSlider.style.transform = `translateX(-${popularIndex * popularCardWidth}px)`;
}

popularNextBtn.addEventListener("click" , () =>{
    const popularVisibleCards = getPopularVisibleCards();
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
window.addEventListener("resize", () => {
  const popularVisibleCards = getPopularVisibleCards();
  if (popularIndex > popularCards.length - popularVisibleCards) {
    popularIndex = Math.max(0, popularCards.length - popularVisibleCards);
  }
  popularMoveSlider();
});

popularMoveSlider();
