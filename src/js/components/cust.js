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
});

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  infinite: true,
  pauseOnHover: false,
  asNavFor: ".slider-nav",
});
var sliderNav = $(".slider-nav");

if (sliderNav.length) {
  sliderNav.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
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
          dots: true,
          arrows: false,
        },
      },
    ],
  });
  sliderNav.slick("slickPlay");
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
