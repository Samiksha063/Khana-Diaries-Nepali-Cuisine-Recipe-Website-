
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".login-btn");
  const logoutBtn = document.getElementById("logoutBtn");

  const isLoggedIn = localStorage.getItem("loggedInUser");

  if (isLoggedIn) {
    if (loginBtn) loginBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
  } else {
    if (loginBtn) loginBtn.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "none";
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedInUser");
      if (loginBtn) loginBtn.style.display = "inline-block";
      if (logoutBtn) logoutBtn.style.display = "none";
      window.location.href = "/index.html";
    });
  }
});

//home page image slider
$(document).ready(function () {
    let index = 0;
    const slideCount = $(".slide").length;
    let dots = $(".dot");

    function showSlide(){ //shows current slide and highlight the active class dot
        $(".slider-track").css("transform", `translateX(-${index * 100}%)`);

        dots.removeClass("active-dot");

        dots.eq(index).addClass("active-dot");

    }

    function slideNext() {
      index = (index + 1) % slideCount;
      showSlide();
        
    }

    setInterval(slideNext, 4000);

    dots.click(function(){
        index = $(this).data("index"); // Get the index number from the clicked dot
        showSlide();

    });
  });
