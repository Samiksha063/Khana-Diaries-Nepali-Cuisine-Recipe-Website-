    const hamburger = document.querySelector(".hamburger");
        const nav = document.querySelector("nav");

        hamburger.addEventListener("click", () =>{
            nav.classList.toggle("active-menu");
            console.log("hamburger menu worked");

        });