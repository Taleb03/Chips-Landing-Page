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

var h1Span = document.querySelector(".h1-span");
var text = h1Span.textContent;
h1Span.innerHTML = "";

text.split("").forEach((char) => {
  var span = document.createElement("span");
  span.textContent = char;
  h1Span.appendChild(span);
});

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

gsap.to(".hleft h1", {
  opacity: 1,
  y: 0,
  duration: 0.4,
});

let tl = gsap.timeline();

tl.to(h1Span, {
  opacity: 1,
  y: 0,
  duration: 0.2,
  stagger: 0.5,
});

tl.to(".hleft>p", {
  opacity: 1,
  x: 0,
  duration: 0.4,
});

tl.to(".shop", {
  opacity: 1,
  duration: 0.1,
});

tl.to(".hright img", {
  opacity: 1,
  x: 0,
  duration: 0.2,
});

tl.to(
  ".bg1",
  {
    opacity: 1,
    x: 0,
    duration: 0.1,
  },
  "a"
);

tl.to(
  ".bg2",
  {
    opacity: 1,
    x: 0,
    duration: 0.1,
  },
  "a"
);

window.addEventListener("resize", function () {
  const hleftP = document.querySelector(".hleft > p");
  if (window.innerWidth < 769) {
    hleftP.innerHTML = hleftP.innerHTML.replace(/<br\s*\/?>/gi, " ");
  }
});
