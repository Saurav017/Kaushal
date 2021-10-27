const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-links')
const loader = document.querySelector('.loader');
const main = document.querySelector('.kaushal-website');
const body = document.querySelector('body')


// loader
function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 10000);
}

init();


// Navbar
menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  console.log("Button is active");
  menuLinks.classList.toggle('active');
  body.classList.toggle('is-nav');
  
// Nav button scroll
  for (var i = 0; i < navLinks.length; i++) {
    var self = navLinks[i];

    self.addEventListener(
      "click",
      function () {
        menu.classList.remove('is-active');
        menuLinks.classList.remove("active");
        body.classList.remove("is-nav");

      })
  }

})
// Get a Date

const countdown = () => {
    const countDate = new Date("Nov 25, 2021 00:00:00").getTime();
    const now = new Date().getTime();

    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    // Calculate the days

    const festDay = Math.floor(gap / day);
    console.log(festDay);


    document.querySelector(".days-remaining span").innerText = festDay;

}

countdown()


// Modal

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.querySelectorAll(".know-more");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
for (i of btn) {
    i.addEventListener('click', function () {
        console.log("Clicked");
        modal.style.display = "block";
    })
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}




// --------------------------------------------------



const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});