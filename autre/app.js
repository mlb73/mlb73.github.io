function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

navSlide();

function togglePopup0(){
  document.getElementById("popup-0").classList.toggle("active");
}

function togglePopup1(){
  document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup2(){
  document.getElementById("popup-2").classList.toggle("active");
}

function togglePopup3(){
    document.getElementById("popup-3").classList.toggle("active");
  }

function togglePopup4(){
  document.getElementById("popup-4").classList.toggle("active");
}

