//==============global variables=================
var winW = $(window).outerWidth();
var winH = $(window).outerHeight();
var indexPage = $("#index_page").length;
var contactPage = $("#contact_page").length;

//console.log(`window width is ${winW}`);

//================ functions starts ====================

//transfer height of source element to destination element
function transferHeight(source, destination) {
  var sourceH = $(source).outerHeight();
  $(destination).outerHeight(sourceH);
}

//set equal height to set of target class
function equalHeight(target) {
  var setHeight = 0;
  $(target).each(function () {
    var getH = $(this).outerHeight();
    if (setHeight < getH) {
      setHeight = getH;
    }
  });
  $(target).outerHeight(setHeight);
}

//get current year
function getCurrentYear() {
  var date = new Date();
  var yearVal = date.getFullYear();
  $(".current_year").text(yearVal);
}

//================== functions ends ================

//################################### document ready function ###########################################

$(document).ready(function (evt) {
  //==============displaying current year==============
  getCurrentYear();

  //========toggle sidebar============
  $("#nav-icon3").click(function () {
    $(this).toggleClass("open");
    $(".sidebar_wrap").toggleClass("open");
  });

  // force click on nav-menu when any link is clicked
  $(".sidebar_wrap .links a").on("click", function () {
    $("#nav-icon3").trigger("click");
  });

  //=====================================index page script========================================
  if (indexPage == 1) {
    $(".hallmark_slider").slick({
      dots: true,
      infinite: true,
      autoplay: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            vertical: false,
            verticalSwiping: false,
          },
        },
      ],
    });

    $(".tab-a").click(function () {
      $(".tab-box").removeClass("tab-active");
      $(".tab-box[data-id='" + $(this).attr("data-id") + "']").addClass(
        "tab-active"
      );
      $(".tab-a").removeClass("active-a");
      $(this).parent().find(".tab-a").addClass("active-a");
      $(".our_catalogue_slider").slick("refresh");
      $(".our_catalogue_slider_two").slick("refresh");
    });

    function progressbar(sliderName, progressClass) {
      var $slider = $(sliderName);
      var $progressBar = $(progressClass);
      var $progressBarLabel = $(".progress_bar");
      $slider.on(
        "beforeChange",
        function (event, slick, currentSlide, nextSlide) {
          var calc = (nextSlide / (slick.slideCount - 1)) * 100;

          $progressBar
            .css("background-size", calc + "% 100%")
            .attr("aria-valuenow", calc);

          $progressBarLabel.text(calc + "% completed");
        }
      );
    }
    progressbar(".our_catalogue_slider", ".progress1");
    progressbar(".our_catalogue_slider_two", ".progress2");
    progressbar(".upcoming_events_slider", ".progress3");
    progressbar(".corporate_social_slider", ".progress4");

    $(".our_catalogue_slider").slick({
      dots: false,
      autoplay: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover: false,
      prevArrow:
        '<img src="img/arrow_prev.png" class="slide-arrow prev-arrow">',
      nextArrow:
        '<img src="img/arrow_next.png" class="slide-arrow next-arrow">',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: true,
            dots: false,
            variableWidth: true,
          },
        },
      ],
    });
    $(".our_catalogue_slider_two").slick({
      dots: false,
      autoplay: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover: false,
      prevArrow:
        '<img src="img/arrow_prev.png" class="slide-arrow prev-arrow">',
      nextArrow:
        '<img src="img/arrow_next.png" class="slide-arrow next-arrow">',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: true,
            dots: false,
          },
        },
      ],
    });

    $(".working_across_slider").slick({
      dots: false,
      infinite: true,
      autoplay: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: "linear",
    });

    $(".logo_slider").slick({
      dots: false,
      infinite: true,
      autoplay: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: true,
          },
        },
      ],
    });

    $(".review_content_slider").slick({
      dots: true,
      infinite: true,
      autoplay: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
    });

    $(".upcoming_events_slider").slick({
      dots: false,
      autoplay: false,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover: false,
      prevArrow:
        '<img src="img/arrow_prev.png" class="slide-arrow prev-arrow">',
      nextArrow:
        '<img src="img/arrow_next.png" class="slide-arrow next-arrow">',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: true,
            dots: false,
            variableWidth: true,
          },
        },
      ],
    });

    $(".corporate_social_slider").slick({
      dots: false,
      autoplay: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
      asNavFor: ".corporate_social_slider2",
      // variableWidth: true,
      prevArrow:
        '<img src="img/arrow_prev.png" class="slide-arrow prev-arrow">',
      nextArrow:
        '<img src="img/arrow_next.png" class="slide-arrow next-arrow">',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            arrows: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: true,
            dots: false,
            variableWidth: false,
          },
        },
      ],
    });
    $(".corporate_social_slider2").slick({
      dots: false,
      autoplay: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
      asNavFor: ".corporate_social_slider",
      prevArrow:
        '<img src="img/arrow_prev.png" class="slide-arrow prev-arrow">',
      nextArrow:
        '<img src="img/arrow_next.png" class="slide-arrow next-arrow">',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
            variableWidth: false,
          },
        },
      ],
    });
  }
});

//################################### window load function ##############################################
$(window).on("load", function () {
  equalHeight(".corporate_content");
  setTimeout(function () {
    $(".loader_overlay").fadeOut(300);
  }, 100);
});

//################################### window scroll function ###########################################
$(window).on("scroll", function (e) {
  var scrollTopPos = $(window).scrollTop();

  var hallmark_credibiltyOff = $(".hallmark_credibilty").offset();

  if (hallmark_credibiltyOff.top <= scrollTopPos + $("header").outerHeight()) {
    $("header").addClass("headerShadow");
  } else {
    $("header").removeClass("headerShadow");
  }

  //lazy loading images
  //html syntax below
  //<img data-lazy-src="path/to/image" alt="" class="">

  $("img[data-lazy-src]").each(function () {
    if ($(this).attr("src") == undefined) {
      var getOffsetTop = $(this).offset().top;
      if (getOffsetTop < scrollTopPos + winH * 2) {
        $(this).attr("src", $(this).attr("data-lazy-src"));
      }
    }
  });
});

//################################### window resize function ###########################################
$(window).on("resize", function () {});

//################### window orientation change function ############################
window.addEventListener("orientationchange", function () {
  location.reload();
});

// scrollout;
ScrollOut({
  once: true,
});

ScrollOut({
  targets: ".nature_img",
  threshhold: 0.5,
  cssProps: {
    visibleY: true,
  },
});
