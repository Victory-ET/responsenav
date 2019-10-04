const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");



hamburger.addEventListener("click", () =>{
    navLinks.classList.toggle("open");
    //to add the fade class to each of the links
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});
