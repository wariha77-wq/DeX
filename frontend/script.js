const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener(
    "click",()=>{
        if(navLinks.classList.contains("active")){
            navLinks.classList.remove("active");
        }else{
            navLinks.classList.add("active");
        }

    }
)