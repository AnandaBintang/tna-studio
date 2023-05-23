var ip = {
  0: {
    title: "Star Wars Battlefront Ultimate Edition",
    image:
      "https://www.mobygames.com/images/covers/l/490197-star-wars-battlefront-ultimate-edition-playstation-4-front-cover.png",
  },
  1: {
    title: "Starwars Jedi Fallen Order Square Art",
    image:
      "https://media.playstation.com/is/image/SCEA/star-wars-jedi-fallen-order-square-art-01-ps4-us-29may19?$native_nt$",
  },
  2: {
    title: "Starwars Squadron",
    image:
      "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200612170630-underscored-star-wars-squadrons-lead-1.jpg",
  },
  3: {
    title: "Lego Starwars Skywalker Saga",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/lego-star-wars-skywalker-saga-main_c0051eca.jpeg?region=0%2C0%2C1000%2C999&width=960",
  },
  4: {
    title: "Ghost of Tsushima",
    image:
      "https://droidjournal.com/wp-content/uploads/2020/04/ghost-of-tsushima.jpg",
  },
  5: {
    title: "Horizon Zero Down",
    image:
      "https://i.pinimg.com/originals/cd/51/83/cd51838b54314c40e11fb351b5b5eb74.jpg",
  },
  6: {
    title: "Uncharted",
    image:
      "https://www.mobygames.com/images/covers/l/330413-uncharted-4-a-thief-s-end-playstation-4-front-cover.jpg",
  },
  7: {
    title: "GTA V",
    image: "https://www.rockstargames.com/V/img/global/order/mobile-cover.jpg",
  },
  8: {
    title: "Spiderman Miles Morales",
    image:
      "https://i.pinimg.com/originals/14/21/72/14217228af3726b095b9805b991e1c16.jpg",
  },
};

for (const property in ip) {
  let html = `<a class="card" alt="${ip[property].title}">
                <div class="card-bg"
                    style="background-image: url(${ip[property].image});">
                </div>
              </a>`;
  $("#ip-carousel").append(html);
}

(function ($) {
  $(function () {
    var slider = $(".slider").flickity({
      imagesLoaded: true,
      percentPosition: false,
      prevNextButtons: false,
      initialIndex: 3,
      pageDots: false,
      groupCells: 1,
      selectedAttraction: 0.2,
      friction: 0.8,
      draggable: true,
    });

    slider.on(
      "staticClick.flickity",
      function (event, pointer, cellElement, cellIndex) {
        slider.flickity("selectCell", cellIndex);
        if (typeof cellIndex == "number") {
        }
      }
    );

    var flkty = slider.data("flickity");
    flkty.selectedElement.classList.add("is-custom-selected");
    flkty.resize();
    flkty.reposition();
    let time = 0;
    function reposition() {
      flkty.reposition();
      if (time++ < 10) {
        requestAnimationFrame(reposition);
      } else {
        $(".flickity-prev-next-button").css("pointer-events", "auto");
      }
    }
    requestAnimationFrame(reposition);
    $("#ip-title").text($(".is-custom-selected").attr("alt"));

    for (const property in ip) {
      if (ip[property].title == $(".is-custom-selected").attr("alt")) {
        flkty.selectedElement.setAttribute("href", ip[property].image);
        refreshFsLightbox();
      }
    }

    flkty.on("settle", () => {
      $(".card").removeClass("is-custom-selected");
      $(".card").removeAttr("data-fslightbox");
      $(".card").removeAttr("href");

      $(".flickity-prev-next-button").css("pointer-events", "none");
      flkty.selectedElement.classList.add("is-custom-selected");

      $("#ip-title").text($(".is-custom-selected").attr("alt"));

      for (const property in ip) {
        if (ip[property].title == $(".is-custom-selected").attr("alt")) {
          flkty.selectedElement.setAttribute("href", ip[property].image);
          refreshFsLightbox();
        }
      }

      let time = 0;
      function reposition() {
        flkty.reposition();
        if (time++ < 10) {
          requestAnimationFrame(reposition);
        } else {
          $(".flickity-prev-next-button").css("pointer-events", "auto");
        }
      }
      requestAnimationFrame(reposition);
    });

    $(".carousel").addClass("animation-reveal");
    $(".carousel").css("opacity", "0");
    flkty.resize();
    flkty.reposition();
    setTimeout(() => {
      $(".carousel").removeClass("animation-reveal");
      $(".carousel").css("opacity", "1");
      flkty.resize();
      flkty.reposition();
      let time = 0;
      function reposition() {
        flkty.reposition();
        if (time++ < 10) {
          requestAnimationFrame(reposition);
        }
      }
      requestAnimationFrame(reposition);
    }, 1000);
  });
})(jQuery);
