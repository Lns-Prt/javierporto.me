// Sticky navbar on scroll setup
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
const setNavbar = () => {
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (window.pageYOffset >= sticky && width > 768) {
            navbar.classList.add("sticky", "translucent")
    } else {
        navbar.classList.remove("sticky", "translucent");
    }
};

window.onscroll = setNavbar;


// Background colors for project cards text containers
const colorArray = [ "#568ED0", "#8e44ad", "#16a085", "#2c3e50", "#27ae60"];
const projectTextContainers = document.getElementsByClassName("projects-entry-text");
let i = 0;
for (let container of projectTextContainers) {
    console.log(container);
    console.log(`Assigning ${colorArray[i]} to ${container} element.`);
    container.style.backgroundColor = colorArray[i];
    i = (i + 1) % colorArray.length;
}