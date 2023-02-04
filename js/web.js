$(document).ready(function () {
  //menu
  $("#mmb").click(function () {
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

  //blobs-btn
  $(".blob-btn").append(`<span class="blob-btn__inner">
  <span class="blob-btn__blob"></span>
  <span class="blob-btn__blob"></span>
  <span class="blob-btn__blob"></span>
  <span class="blob-btn__blob"></span>
</span>`);

  //tabs
  $(".tab").each(function () {
    $(this)
      .find(">div")
      .click(function () {
        $(this)
          .addClass("selected")
          .siblings(".selected")
          .removeClass("selected");
      })
      .eq(0)
      .click();
  });

  //scroll to top
  $("#gotop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  //scroll
  $(window).scroll(function () {
    scrollFn();
  });

  //resize trigger
  $(window).resize(function () {
    resizeScreen();
  });

  //fixed jump bg
  if (navigator.userAgent.match(/Trident\/7\./)) {
    // if IE
    $("body").on("mousewheel", function (event) {
      // remove default behavior
      event.preventDefault();

      //scroll without smoothing
      var wheelDelta = event.wheelDelta;
      var currentScrollPosition = window.pageYOffset;
      window.scrollTo(0, currentScrollPosition - wheelDelta);
    });
  }

  //top banner
  var banner = new Swiper("#swiper-banner", {
    speed: 1,
    slidesPerView: 1,
    effect: "fade",
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 4500,
    },
  });
  //testimonials
  var testimonial = new Swiper("#swiper-testimonial", {
    slidesPerView: 1,
    pagination: {
      el: "#swiper-testimonial .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  //init
  //hide image not found icon
  $("img").attr("onerror", "this.style.display='none'");

  resizeScreen();
  scrollFn();
  Wow.init();
});

var getTutors = function (id) {
  console.log(id);
};
var getPosts = function (id) {
  console.log(id);
};

function scrollFn() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    $("#gotop").fadeIn();
    $("header").addClass("compact");
  } else {
    $("#gotop").fadeOut();
    $("header").removeClass("compact");
  }
  //
}

function resizeScreen() {}

// Wow
var Wow = (function () {
  "use strict";

  // Handle Wow
  var handleWow = function () {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (true is default)
      tablet: true, // trigger animations on tablet devices (true is default)
      live: true,
    });
    wow.init();
  };

  return {
    init: function () {
      handleWow(); // initial setup for counter
    },
  };
})();

window.onload = function () {
  resizeScreen();
  scrollFn();
};
