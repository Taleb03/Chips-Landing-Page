gsap.to(".left", {
  opacity: 1,
  x: 0,
  duration: 0.5,
});

gsap.to(".middle ul li a", {
  y: 0,
  opacity: 1,
  duration: 1,
  ease: "power2.out",
  stagger: 0.1,
});

gsap.to(".search-bar", {
  opacity: 1,
  x: 0,
  duration: 0.7,
});

gsap.to(".dashboard-btn", {
  opacity: 1,
  x: 0,
  duration: 0.8,
});

var dashboardBtn = document.querySelector(".dashboard-btn");
var closeBtn = document.querySelector(".close");
var mobileNav = document.querySelector(".mnav");

dashboardBtn.addEventListener("click", () => {
  mobileNav.style.display = "flex";
  gsap.to(".close", {
    opacity: 1,
  });

  gsap.to(".links ul li a", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1,
  });
});

closeBtn.addEventListener("click", () => {
  gsap.to(".close", {
    opacity: 0,
    duration: 0.5,
  });
  gsap.to(".links ul li a", {
    y: -500,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
  });
  gsap.to(mobileNav, {
    display: "none",
    duration: 0.5,
  });
});
