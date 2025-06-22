// -------------------search recipe feature--------------------

const search = document.getElementById("search");
const message = document.getElementById("message");
const clearSearch  = document.getElementById("clearSearch");

// array of recipes
const recipes= ["dalbhat", "dhindo", "momo" ,"wo", "chhoila", "selroti", "yomari", "tama", "milktea","lassi","bhatmassadheko", "saag", "chokha", "gundruksaadheko", "jerry","kheer", "chickencurry", "thwon", "chatamari", "tomatopickle", "pirooaloo", "momokoachar"];

search.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        const query = event.target.value.toLowerCase().replace(/\s+/g, ''); //replace(/\s+/g, '')=> (regular expression) removes white space globally
        
    //     const basePath = window.location.hostname === "samiksha063.github.io"
    // ? "/Khana-Diaries-Nepali-Cuisine-Recipe-Website-/pages/allRecipes.html"
    // : "pages/allRecipes.html";
        window.location.href = `../pages/allRecipes.html?recipe=${encodeURIComponent(query)}`;
    }
});

clearSearch.addEventListener("click", () => {
    search.value = "";
    message.textContent = ""; //clears previous message
});

const recipeParams = new URLSearchParams(window.location.search);
const recipe = recipeParams.get("recipe");
if(recipe){
    const recipeCard = document.getElementById(recipe);

    if(recipeCard){
        recipeCard.scrollIntoView({
            behavior : "smooth",
            block : "center"
        });

        recipeCard.classList.add("highlight");

        setTimeout(() => {
            recipeCard.classList.remove("highlight");
        },3000); //removes highlight after 3sec
    }else{
        document.querySelectorAll(".allRecipeCard").forEach(recipeCard => {
            recipeCard.style.display = "none";
        });

            message.innerHTML = 
            `<p style = " margin-top: 10% ;">Recipe not found! </p>
            <button id = "goBackBtn">&#8592; Go back </button>`

            // go back to all recipe button
document.getElementById("goBackBtn").addEventListener("click", () => {
    //shows all recipe card again
    document.querySelectorAll(".allRecipeCard").forEach(recipeCard => {
            recipeCard.style.display = "block";
        });

    message.textContent = "";//clears the recipe not found message
    search.value = "";
});

        
    }
}





// ------------All Recipe page category filter------------------------

const buttons = document.querySelectorAll(".categories-btn .filter-btn");
const cards = document.querySelectorAll(".allRecipeCard");


buttons.forEach(button => {
    button.addEventListener("click" , (e) => {// Add click event listeners to each button
        e.preventDefault(); //prevent default link behaviour

        // Toggle active state: Remove 'active' from all buttons, add to clicked one
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.getAttribute("data-category");

        // Filter cards: Show/hide based on category
        cards.forEach(card => {
            const cardCategory = card.getAttribute("data-category");
            if(category === "all" || cardCategory === category){
                card.classList.remove("hidden");// Show card
            }else{
                card.classList.add("hidden");// Hide card
            }
        });
    });
});

// Auto-filter when page loads based on URL
window.addEventListener("load", () => {
    // Check if there's a category in the URL (like ?category=snacks)

    const urlParms = new URLSearchParams(window.location.search);
    console.log(window.location.search);
    const category = urlParms.get("category");
    console.log(category);

    if(category){
        // Find the button for this category and click it automatically
        const filterButton = document.querySelector(`[data-category = "${category}"]`);

        if(filterButton){
            filterButton.click();
        }
    }
})



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















