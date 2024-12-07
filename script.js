var square = document.querySelector(".dashboard-btn");
var close = document.querySelector(".close");
var mnav = document.querySelector(".mnav");

square.addEventListener("click", () => {
  mnav.style.display = "flex";
});

close.addEventListener("click", () => {
  mnav.style.display = "none";
});

gsap.from(".left img", { 
  x: -1000,
  opacity: 0,
  ease: "power2.inOut",
  duration: 1,
});
