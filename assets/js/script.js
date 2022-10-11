$(document).ready(function () {
  // the body of this function is in assets/js/now-ui-kit.js
  nowuiKit.initSliders();
});

function scrollToAbout() {
  if ($(".about-section").length != 0) {
    $("html, body").animate(
      {
        scrollTop: $(".about-section").offset().top,
      },
      1000
    );
  }
}
function scrollToHome() {
  if ($(".home-section").length != 0) {
    $("html, body").animate(
      {
        scrollTop: $(".home-section").offset().top,
      },
      1000
    );
  }
}
function scrollToWork() {
  if ($(".work-section").length != 0) {
    $("html, body").animate(
      {
        scrollTop: $(".work-section").offset().top,
      },
      1000
    );
  }
}
function scrollToContact() {
  if ($(".contact-section").length != 0) {
    $("html, body").animate(
      {
        scrollTop: $(".contact-section").offset().top,
      },
      1000
    );
  }
}
