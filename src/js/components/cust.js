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

$(window).on("load", function () {
  document.documentElement.style.setProperty(
    "--headerHeight",
    $(".header").outerHeight() + "px"
  );
  document.documentElement.style.setProperty("--winHeight", winH + "px");
  document.documentElement.style.setProperty("--winWidth", winW + "px");
  setTimeout(loadBannerAnim, 6100);
  console.log("change");
  setTimeout(function () {
    $(".intro-video").fadeOut();
    $("body").removeClass("overflowAU");
  }, 6000);
  function loadBannerAnim() {
    $(".banner-sec").addClass("banner-sec-anim");
    $(".DiamondImg").addClass("DiamondImgAnim");
    $(".bgDiamondImg").addClass("bgDiamondImgAnim");
    $(".str").addClass("strAnim");
    $(".bannerPara").addClass("bannerParaAnim");
    $(".bannerHead span").addClass("spanAnim");
    $("header").addClass("headerAnim");
  }
});

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  infinite: true,
  asNavFor: ".slider-nav",
});
var sliderNav = $(".slider-nav");

if (sliderNav.length) {
  sliderNav.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    asNavFor: ".slider-for",
    dots: false,
    infinite: true,
    loop: true,
    focusOnSelect: true,
    verticalSwiping: true,
    prevArrow: '<img src="img/arrow_prev.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="img/arrow_next.png" class="slide-arrow next-arrow">',
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
