// Vanilla JavaScript Scroll to Anchor
// @ https://perishablepress.com/vanilla-javascript-scroll-anchor/
(function() {
    scrollTo();
})();

function scrollTo() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        if ((link.href && link.href.indexOf('#') != -1) && ((link.pathname == location.pathname) || ('/' + link.pathname == location.pathname)) && (link.search == location.search)) {
            link.onclick = scrollAnchors;
        }
    }
}

function scrollAnchors(e, respond = null) {
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width > 768) {
        const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
        e.preventDefault();
        var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
        const targetAnchor = document.querySelector(targetID);
        if (!targetAnchor) return;
        const originalTop = distanceToTop(targetAnchor);
        window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
        const checkIfDone = setInterval(function() {
            const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
            if (distanceToTop(targetAnchor) === 0 || atBottom) {
                targetAnchor.tabIndex = '-1';
                targetAnchor.focus();
                window.history.pushState('', '', targetID);
                clearInterval(checkIfDone);
            }
        }, 100);
    }
}


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
    container.style.backgroundColor = colorArray[i];
    i = (i + 1) % colorArray.length;
}


// Header banner arrow animation begins after delay
const headerArrow = document.getElementById("headerArrow");
setTimeout(() => {
    headerArrow.classList.add("pointer-down");
}, 4000);
