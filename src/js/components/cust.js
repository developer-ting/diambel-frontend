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
  setTimeout(function () {
    $(".intro-video").fadeOut();
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
