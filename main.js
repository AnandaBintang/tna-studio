$(document).ready(function () {
  const mediaQuery = window.matchMedia("(min-width: 1025px)");

  $("body").css("overflowY", "hidden");
  $("#preloader").css({
    visibility: "visible",
    opacity: "1",
    transition: "opacity 2s linear",
  });

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
        $("body").css("overflowY", "auto");
        if (!mediaQuery.matches) {
          $(".navbar").addClass("sticky-top");
        }
      }, 1300);
    }, 2000);
  });
});
