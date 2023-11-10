// Responsive  on nav bar
function myFunction(x) {
  x.classList.toggle("change");
  var topnav = document.querySelector(".topnav");
  var bar2 = document.querySelector(".bar2");
  var header = document.querySelector("header");
  bar2.style.opicty = "1";
  topnav.style.display = topnav.style.display === "block" ? "none" : "block";
  topnav.style.backgroundColor = "#F1A501";
  header.style.display =
    header.style.display === "inline-block" ? "flex" : "inline-block";
  header.style.backgroundColor =
    header.style.backgroundColor === "#F1A501" ? "#F1A501" : "#F1A501";
  let container = document.querySelector(".container");
  container.style.cssText = "position: fixed; right: 0; top: 11px;";
}

// appere card when hovering heart image
function heartfun() {
  var heartcard = document.getElementById("heart-card");
  heartcard.style.display =
    heartcard.style.display === "block" ? "none" : "block";
}

// Scrolling Change Background Color
window.onscroll = () => {
  const nav = document.querySelector("header");
  if (this.scrollY <= 10) nav.className = "";
  else nav.className = "scroll";
};

// slide to show comments people
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("about-card");
    let points = document.getElementsByClassName("points")[0].getElementsByTagName("div");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        points[i].style.backgroundColor = "#c4c4c4";
    }

    slides[slideIndex - 1].style.display = "block";
    points[slideIndex - 1].style.backgroundColor = "black";
}

