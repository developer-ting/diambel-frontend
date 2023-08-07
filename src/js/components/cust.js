var step_sec = $(".faq_box .faq_title");
var experience_info = $(".solutions_diamonds_left  .imgSec");
step_sec.each(function (ind, item) {
  var itemAttr = $(item).attr("step-name");
  $(this).click(function () {
    $("#" + itemAttr)
      .siblings()
      .removeClass("showing");
    $("#" + itemAttr).addClass("showing");
  });
});

function loadBannerAnim() {
  $(".bannerImg").addClass("bannerImgAnim");
  $(".DiamondImg").addClass("DiamondImgAnim");
  $(".bgDiamondImg").addClass("bgDiamondImgAnim");
  $(".str").addClass("strAnim");
  $(".bannerPara").addClass("bannerParaAnim");
  $(".bannerHead span").addClass("spanAnim");
  $("header").addClass("headerAnim");
  $("body").removeClass("overflowAU");
}

$(window).on("load", function () {
  document.documentElement.style.setProperty(
    "--headerHeight",
    $(".header").outerHeight() + "px"
  );
  document.documentElement.style.setProperty(
    "--corporate_contentH",
    $(".corporate_content").outerHeight() + "px"
  );
  document.documentElement.style.setProperty(
    "--corporate_contentW",
    $(".corporate_content").outerHeight() + "px"
  );
  document.documentElement.style.setProperty(
    "--illustrious_flex",
    $(".illustrious_left").outerHeight() + "px"
  );
  document.documentElement.style.setProperty("--winHeight", winH + "px");
  document.documentElement.style.setProperty("--winWidth", winW + "px");
  setTimeout(loadBannerAnim, 6100);
  setTimeout(function () {
    $(".intro-video").fadeOut();
    $("body").removeClass("overflowAU");
  }, 6000);

  if (winW < 992) {
    loadBannerAnim();
  }
  var isVisited = sessionStorage.getItem("visited");
  if (isVisited) {
    loadBannerAnim();
    $(".bannerHead span").addClass("delayNone").addClass("spanAnim");
    $(".bannerPara").addClass("delayNone").addClass("bannerParaAnim");
    $(".DiamondImg").addClass("delayNone").addClass("DiamondImgAnim");
    $(".bgDiamondImg").addClass("delayNone").addClass("bgDiamondImgAnim");
    console.log(isVisited);
  } else {
    sessionStorage.setItem("visited", "true");
  }
});

var sliderNav = $(".slider-nav");

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  pauseOnHover: false,
  asNavFor: ".slider-nav",
});

// Function to start the slider autoplay
function startSliderAutoplay() {
  sliderNav.slick("slickPlay");
}

// Function to stop the slider autoplay
function stopSliderAutoplay() {
  sliderNav.slick("slickPause");
}

// Intersection Observer callback function
function handleIntersection(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      startSliderAutoplay();
    } else {
      stopSliderAutoplay();
    }
  });
}

// Create the Intersection Observer
const options = {
  rootMargin: "0px",
  threshold: 0.5, // Adjust as needed (0.5 means when 50% of the slider is visible)
};

const observer = new IntersectionObserver(handleIntersection, options);

// Target the slider element and start observing
const sliderElement = document.querySelector(".slider-nav");
observer.observe(sliderElement);

if (sliderNav.length) {
  sliderNav.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    vertical: true,
    asNavFor: ".slider-for",
    arrows: true,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    pauseOnHover: false,
    verticalSwiping: true,
    prevArrow: '<img src="img/dotsSlide.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="img/dotsSlide.png" class="slide-arrow next-arrow">',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
          variableWidth: true,
          // centerMode: true,
          vertical: false,
          autoplay: false,
          verticalSwiping: false,
        },
      },
    ],
  });
  //sliderNav.slick("slickPlay");
}
function progressbar(sliderName, progressClass) {
  var $slider = $(sliderName);
  var $progressBar = $(progressClass);
  var $progressBarLabel = $(".progress_bar");
  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    var calc = (nextSlide / (slick.slideCount - 1)) * 100;

    $progressBar
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);

    $progressBarLabel.text(calc + "% completed");
  });
}
progressbar(".slider-nav", ".progress5");

$(".slider-nav").on(
  "beforeChange",
  function (event, slick, currentSlide, nextSlide) {
    // get the nextSlide as an Object
    var NextSlideDom = $(slick.$slides.get(nextSlide));
    // Add a transition when you're changing the min-height
    $(".slider-nav .slick-list").css("transition", "min-height 1s ease");

    // Change the height
    $(".slider-nav .slick-list").css("min-height", NextSlideDom.height());
  }
);

$("#skip").on("click", function () {
  $(".intro-video").fadeOut();
  loadBannerAnim();
});
$(window).on("scroll", function (e) {
  var scrollTopPos = $(window).scrollTop();
  var getOffsetTop = $("#autoSlider").offset().top;
  if (getOffsetTop <= scrollTopPos + ($(".header").outerHeight() + 50)) {
    $(".photocar1").addClass("photo");
    $(".photocar2").addClass("photo");
  }
});
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("photo");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
ScrollOut({
  targets: ".prlx",
  cssProps: {
    viewportY: true,
  },
});

if (window.innerWidth < 767) {
  $(".footer_box > h5").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".footer_content").slideUp(200);
      $(".footer_box >h5 i").removeClass("fa-minus").addClass("fa-plus");
    } else {
      $(".footer_box > h5 i").removeClass("fa-minus").addClass("fa-plus");
      $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
      $(".footer_box > h5").removeClass("active");
      $(this).addClass("active");
      $(".footer_content").slideUp(200);
      $(this).siblings(".footer_content").slideDown(200);
    }
  });
}
$(document).ready(function () {
  var isVisited = sessionStorage.getItem("visited");
  if (isVisited) {
    $("#skip").remove();
    $(".intro-video").remove();
  } else {
    sessionStorage.setItem("visited", "true");
  }
});
