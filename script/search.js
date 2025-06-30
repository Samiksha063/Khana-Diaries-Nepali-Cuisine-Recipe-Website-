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