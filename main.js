$(document).ready(function () {
  const mediaQuery = window.matchMedia("(min-width: 1025px)");

  window.addEventListener("load", () => {
    setTimeout(() => {
      for (let i = 0; i <= 800; i++) {
        setTimeout(() => {
          $("#preloader").css({
            bottom: `-${i}px`,
            transition: "bottom 1s",
          });
        }, 500);
      }

      setTimeout(() => {
        if (!mediaQuery.matches) {
          $(".navbar").addClass("sticky-top");
        }
      }, 1300);
    }, 2000);
  });
});
