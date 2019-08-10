// Get the navbar
const navbar = document.getElementById("navbar");
// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const setNavbar = () => {
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (window.pageYOffset >= sticky && width > 768) {
            navbar.classList.add("sticky", "translucent")
    } else {
        navbar.classList.remove("sticky", "translucent");
    }
};

// When the user scrolls the page, execute myFunction
window.onscroll = setNavbar;
