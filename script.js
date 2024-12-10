var dashboardBtn = document.querySelector(".dashboard-btn");
var closeBtn = document.querySelector(".close");
var mobileNav = document.querySelector(".mnav");

window.addEventListener("resize", function () {
  const hleftP = document.querySelector(".hleft > p");
  if (window.innerWidth < 769) {
    hleftP.innerHTML = hleftP.innerHTML.replace(/<br\s*\/?>/gi, " ");
  }
});

dashboardBtn.addEventListener("click", () => {
  mobileNav.style.display = "flex";
  gsap.to(".close", {
    opacity: 1,
    ease: "power2.out",
  });

  gsap.to(".links ul li a", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.05,
    ease: "power2.out",
  });
});

closeBtn.addEventListener("click", () => {
  gsap.to(".close", {
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  });
  gsap.to(".links ul li a", {
    y: -500,
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,
    ease: "power2.out",
  });
  gsap.to(mobileNav, {
    display: "none",
    duration: 0.5,
    ease: "power2.out",
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
  ease: "power2.out",
});

gsap.to(".middle ul li a", {
  y: 0,
  opacity: 1,
  duration: 0.5,
  ease: "power2.out",
  stagger: 0.05,
});

gsap.to(".search-bar", {
  opacity: 1,
  x: 0,
  duration: 0.5,
  ease: "power2.out",
});

gsap.to(".dashboard-btn", {
  opacity: 1,
  x: 0,
  duration: 0.5,
  ease: "power2.out",
});

gsap.to(".hleft h1", {
  opacity: 1,
  y: 0,
  duration: 0.5,
  ease: "power2.out",
});

let tl = gsap.timeline();
tl.to(h1Span, {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.25,
  ease: "power2.out",
},"a");

tl.to(".hleft>p", {
  opacity: 1,
  x: 0,
  duration: 1,
  ease: "power2.out",
},"a");

tl.to(".shop", {
  opacity: 1,
  duration: 1,
  ease: "power2.out",
},"a");

tl.to(".hright img", {
  opacity: 1,
  x: 0,
  duration: 1,
  ease: "power2.out",
},"a");

tl.to(
  ".bg1",
  {
    opacity: 1,
    x: 0,
    delay: 0.5,
    duration: 0.5,
    ease: "power2.out",
  },
  "a"
);

tl.to(
  ".bg2",
  {
    opacity: 1,
    x: 0,
    delay: 0.5,
    duration: 0.5,
    ease: "power2.out",
  },
  "a"
);
