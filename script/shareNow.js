const imageInput = document.getElementById('image');
const fileNameDisplay = document.getElementById('file-name');

imageInput.addEventListener('change', () => {
  if (imageInput.files.length > 0) {
    fileNameDisplay.textContent = imageInput.files[0].name;
  } else {
    fileNameDisplay.textContent = '';
  }
});

//share recipe only if user has logged in
const loggedInUser = localStorage.getItem("loggedInUser");
  const shareSection = document.getElementById("share-section");
  const loginWarning = document.getElementById("login-warning");

  if (loggedInUser) {
    // User is logged in, show form
    shareSection.style.display = "block";
    loginWarning.style.display = "none";
  } else {
    // Not logged in, show login message
    shareSection.style.display = "none";
    loginWarning.style.display = "block";
  }

//validation
const shareForm = document.getElementById("shareForm");
shareForm.addEventListener("submit", (e) => {
    e.preventDefault();

const title = document.getElementById("title").value;
const prepTime = document.getElementById("prep-time").value;
const cookTime = document.getElementById("cook-time").value;
const description = document.getElementById("description").value;
const ingredients = document.getElementById("ingredients").value;
const instructions = document.getElementById("instructions").value;
const category = document.getElementById("category").value;
const image = document.getElementById("image").value;

const titleError = document.getElementById("title-error");
const prepTimeError = document.getElementById("prep-time-error");
const cookTimeError = document.getElementById("cook-time-error");
const descriptionError = document.getElementById("description-error");
const ingredientsError = document.getElementById("ingredients-error");
const instructionsError = document.getElementById("instructions-error");
const categoryError = document.getElementById("category-error");
const imageError = document.getElementById("image-error");
const shareMessage = document.getElementById("share-message");

titleError.textContent = "";
prepTimeError.textContent = "";
cookTimeError.textContent = "";
descriptionError.textContent = "";
ingredientsError.textContent = "";
instructionsError.textContent = "";
categoryError.textContent = "";
imageError.textContent = "";
shareMessage.textContent = "";

let isValid = true;

if(title === ""){
    titleError.textContent = "Please write the title";
    isValid = false;
}

if(prepTime === ""){
    prepTimeError.textContent = "Please write the dish preparation time";
        isValid = false;

}

if(cookTime === ""){
    cookTimeError.textContent = "Please write the dish cook time";
        isValid = false;

}

if(description === ""){
    descriptionError.textContent = "Please write the description of the dish";
        isValid = false;

}

if(ingredients === ""){
    ingredientsError.textContent = "Please write the ingredients of the dish";
        isValid = false;

}

if(instructions === ""){
    instructionsError.textContent = "Please write the instructions of the dish";
        isValid = false;

}

if(category === "" || category === "Choose category"){
    categoryError.textContent = "Please select a category";
        isValid = false;

}

if(image === ""){
    imageError.textContent = "Please uplaod an image of the dish";
        isValid = false;

}

if (isValid) {
 //Prepare the recipe object with all form data
  const newRecipe = {
    title: title,
    prepTime: prepTime,
    cookTime: cookTime,
    description: description,
    ingredients: ingredients,
    instructions: instructions,
    category: category,
    imageName: imageInput.files.length > 0 ? imageInput.files[0].name : ""
  };

  // Get existing recipes from localStorage
  let recipes = localStorage.getItem("recipes");
  if (recipes) {
    recipes = JSON.parse(recipes); // convert JSON string back to array
  } else {
    recipes = []; // no recipes yet, create empty array
  }

  //  Add new recipe to the array
  recipes.push(newRecipe);

  // Save updated array back to localStorage
  localStorage.setItem("recipes", JSON.stringify(recipes));

  // Hide the form
  shareForm.style.display = "none";

  // Show the success message
  shareMessage.innerHTML = `
    <i class="fas fa-circle-check" style="font-size: 2rem; color: #43A047;"></i>
    <br>
    <span style="font-size: 1.5rem;">Your recipe was submitted successfully. Thank you for contributing!</span>
    <br><br>
    <a href="../index.html" class="btn-back">Back to Home</a>
  `;
  shareMessage.style.color = "#43A047";
  shareMessage.style.textAlign = "center";
  shareMessage.style.marginTop = "30px";
}

});




