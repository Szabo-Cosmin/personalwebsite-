"use strict";

const rotateAnimation = document.querySelector(".rotate-animation");
const project = document.querySelector("#portofolio");
const sections = document.querySelectorAll(".hero-section");

rotateAnimation.addEventListener("click", function (e) {
  e.preventDefault();
  const s1coodrs = project.getBoundingClientRect();

  project.scrollIntoView({ behavior: "smooth" });
});

const navBar = document.querySelector(".right-bar");

if (navBar) {
  navBar.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("nav-icons-1")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
}

const allSections = document.querySelectorAll(".hero-section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.4,
});

if (window.innerWidth >= 1440) {
  allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add("section-hidden");
  });
}

const section = document.querySelectorAll("section");
const lists = document.querySelectorAll(".nav-icon");

function activeLink(li) {
  lists.forEach((item) => item.classList.remove("active"));
  li.classList.add("active");
}

lists.forEach((item) =>
  item.addEventListener("click", function () {
    activeLink(this);
  })
);

window.onscroll = () => {
  section.forEach((heroSection) => {
    let top = window.scrollY;
    let offset = heroSection.offsetTop - 150;
    let height = heroSection.offsetHeight;
    let id = heroSection.getAttribute("id");

    if (top >= offset && top < offset + height) {
      const target = document.querySelector(`[href='#${id}']`).parentElement;
      activeLink(target);
    }
  });
};

const menu = document.querySelector(".sidebar-1");
const hamburger = document.querySelector(".btn--nav");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggle() {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("show-menu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggle);

const menuColor = document.querySelector(".rotation-color");
const hamburgherColor = document.querySelector(".rotation-icon");

function toggleColor() {
  menuColor.classList.toggle("show-color");
}

hamburgherColor.addEventListener("click", toggleColor);

document.addEventListener("click", function (event) {
  const targetElement = event.target;

  if (targetElement === hamburgherColor || menuColor.contains(targetElement)) {
    return;
  }

  menuColor.classList.remove("show-color");
});

const r = document.querySelector(":root");

function green() {
  r.style.setProperty("--primary_color", "#28e98c");
}
function yellow() {
  r.style.setProperty("--primary_color", "#e4af12");
}
function orange() {
  r.style.setProperty("--primary_color", "#fe6f1d");
}
function lightblue() {
  r.style.setProperty("--primary_color", "#14c5fd");
}
function pink() {
  r.style.setProperty("--primary_color", "#ff99cc");
}
function blue() {
  r.style.setProperty("--primary_color", "#1338f3");
}
function red() {
  r.style.setProperty("--primary_color", "#f31313");
}

let btn1 = document.querySelector("#bck-img-1");
let btn2 = document.querySelector("#bck-img-2");
let btn3 = document.querySelector("#bck-img-3");
let btn4 = document.querySelector("#bck-img-4");
let btn5 = document.querySelector("#bck-img-5");
let btn6 = document.querySelector("#bck-img-6");
btn1.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('img/background-original.PNG')";
  document.body.style.backgroundRepeat = "repeat";
});
btn2.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('bck-img/bck-img-1.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundSize = "cover";
});
btn3.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('bck-img/bck-img-2.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundSize = "cover";
});
btn4.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('bck-img/bck-img-3.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundSize = "cover";
});
btn5.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('bck-img/bck-img-4.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundSize = "cover";
});
btn6.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('bck-img/bck-img-5.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundSize = "cover";
});

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => alert("Form successfully submitted"))
    .catch((error) => alert(error));
};

document.querySelector("form").addEventListener("submit", handleSubmit);
