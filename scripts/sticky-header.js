//Allows the header to stay on the top of the screen for mobile devices

// When the user scrolls the page, execute function
window.onscroll = function() {
    stickyAdder()
};

// Get the mobile header
var header = document.getElementById("mobile-header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyAdder() {
  if (getComputedStyle(header).display != "none" && window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}