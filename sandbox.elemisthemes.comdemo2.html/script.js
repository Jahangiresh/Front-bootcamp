$(".owl1").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".owl2").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

const header = document.querySelector(".header__bottom");

document.addEventListener("scroll", () => {
  if (scrollY >= 350) {
    header.style.position = "fixed";
    header.style.zIndex = "3";
    header.style.top = "0";
    header.style.backgroundColor = "white";
  } else {
    header.style.position = "static";
  }
});
