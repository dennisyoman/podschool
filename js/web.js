$(document).ready(function () {
  //menu
  $("#mmb").click(function () {
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

  //blobs-btn
  $(".blob-btn").append(
    '<span class="blob-btn__inner"><span class="blob-btn__blob"></span><span class="blob-btn__blob"></span><span class="blob-btn__blob"></span><span class="blob-btn__blob"></span></span>'
  );

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

  //top banner

  var banner = new Swiper("#swiper-banner", {
    speed: 1,
    slidesPerView: 1,
    effect: "slide",
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 8000,
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

  //class
  $(".class").click(function () {
    $(this).toggleClass("active");
  });

  //init
  //hide image not found icon
  $("img").attr("onerror", "this.style.display='none'");

  //if IE

  $(".bgimg").each(function () {
    var url = $(this).find("> img").attr("src");
    $(this).css("background-image", "url('" + url + "')");
    $(this).find("> img").css("opacity", 0);
  });

  resizeScreen();
  scrollFn();
  Wow.init();
});

//digit animation
var digitAnim = false;
function digitUpAnimation() {
  var step = 100;

  var items = $(".wow.digitUp.animated");

  for (var i = 0; i < items.length; i++) {
    var item = items.eq(i);
    if (!item.hasClass("end")) {
      var t = 1;
      if (item.find(".digit").attr("val").indexOf(".") != -1) {
        t = 100;
      }

      var des = parseFloat(item.find(".digit").eq(0).attr("val")) * t;

      var curr =
        parseFloat(item.find(".digit").eq(0).text().replace(",", "")) * t;

      if (curr < des) {
        curr = parseInt(curr + des / step) / t;
      } else {
        item.addClass("end");
        curr = item.find(".digit").eq(0).attr("val");
      }
      curr = curr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      item.find(".digit").eq(0).text(curr);
    }
  }
  //

  if (
    $(".wow.digitUp.animated").length != $(".wow.digitUp.animated.end").length
  ) {
    setTimeout(digitUpAnimation, 10);
  } else {
    digitAnim = false;
  }
}

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
  if ($(".wow.digitUp").length > 0) {
    if (
      $(".wow.digitUp.animated").length != $(".wow.digitUp.animated.end").length
    ) {
      if (!digitAnim) {
        digitAnim = true;
        digitUpAnimation();
      }
    }
  }
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
