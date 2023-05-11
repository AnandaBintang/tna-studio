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
    }, 1300);
  }, 2000);
});
