// -------------------search recipe feature--------------------

const search = document.getElementById("search");
const message = document.getElementById("message");
const clearSearch  = document.getElementById("clearSearch");

// array of recipes
const recipes = [
  { title: "Dal Bhat", id: "dalbhat", url: "dalbhat.html"},
  { title: "Dhindo", id: "dhindo", url: "dhindo.html" },
  { title: "Momo", id: "momo", url: "momo.html" },
  { title: "Wo", id: "wo", url: "wo.html" },
  { title: "Buff Chhoila", id: "buffchhoila", url: "chhoila.html" },
  { title: "Sel Roti", id: "selroti", url: "selroti.html" },
  { title: "Yomari", id: "yomari", url: "yomari.html" },
  { title: "Aloo Tama", id: "alootama", url: "tama.html" },
  { title: "Milk Tea", id: "milktea", url: "milkTea.html" },
  { title: "Lassi", id: "lassi", url: "lassi.html" },
  { title: "Bhatmas Sadheko", id: "bhatmassadheko", url: "bhatmasSadheko.html" },
  { title: "Spinach", id: "saag", url: "spinach.html" },
  { title: "Chokha", id: "chokha", url: "chokha.html" },
  { title: "Gundruk Saadheko", id: "gundruksaadheko", url: "gundrukSadheko.html" },
  { title: "Jerry", id: "jerry", url: "jerry.html" },
  { title: "Kheer", id: "kheer", url: "kheer.html" },
  { title: "Chicken Curry", id: "chickencurry", url: "chicken.html" },
  { title: "Thwon", id: "thwon", url: "thwon.html" },
  { title: "Chatamari", id: "chatamari", url: "chatamari.html" },
  { title: "Tomato Pickle", id: "tomatopickle", url: "tomatoPickle.html" },
  { title: "Piro Aloo", id: "pirooaloo", url: "piro-aloo.html" },
  { title: "Momo ko Achar", id: "momokoachar", url: "momo-achar.html" }
];
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