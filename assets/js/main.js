$(document).ready(function () {
  const mediaQuery = window.matchMedia("(min-width: 1025px)");

  window.addEventListener("load", () => {
    setTimeout(() => {
      $("#preloader").css({
        top: `100%`,
        transition: "top 1s",
      });

      setTimeout(() => {
        if (!mediaQuery.matches) {
          $(".navbar").addClass("sticky-top");
        }
      }, 1300);
    }, 2000);
  });

  $(document).on("scroll", () => {
    let value = window.scrollY;
    $("#parallax-bg").css("top", `${value * 0.5}px`);
  });

  $(function () {
    $(".card-img-top").imgHover({
      grow: false,
    });
  });
});
