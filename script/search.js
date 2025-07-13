// -------------------search recipe feature--------------------

const search = document.getElementById("search");
const message = document.getElementById("message");
const clearSearch  = document.getElementById("clearSearch");

let recipes = [];

fetch("recipes.json")
.then(response =>{
    if(!response.ok){
        throw new Error ("Could not load recipes.");
    }
    return response.json();
})

.then(data => {
    recipes = data;
})

.catch(error => {
    console.error(error);
});


search.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const query = event.target.value.toLowerCase().replace(/\s+/g, '');
        const currentURL = window.location.href;

        // Check if you're on the homepage (index.html or any other page)
        let baseURL = "";

        if (currentURL.includes("index.html") || currentURL.endsWith("/")) {
            baseURL = "pages/allRecipes.html";
        } else {
            baseURL = "../pages/allRecipes.html";
        }

        window.location.href = `${baseURL}?recipe=${encodeURIComponent(query)}`;
    }
});


clearSearch.addEventListener("click", () => {
    search.value = "";
    message.textContent = ""; //clears previous message
});

// When on allRecipes.html and recipe query param is present
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