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