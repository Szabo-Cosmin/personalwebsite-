"use strict";

const rotateAnimation = document.querySelector(".rotate-animation");
const project = document.querySelector("#portofolio");
const sections = document.querySelectorAll(".hero-section");

rotateAnimation.addEventListener("click", function (e) {
  e.preventDefault();
  const s1coodrs = project.getBoundingClientRect();
  console.log(s1coodrs);

  project.scrollIntoView({ behavior: "smooth" });
});

const navBar = document.querySelector(".right-bar");

if (navBar) {
  navBar.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target);

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
  console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.4,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

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
