$(window).on("scroll", function () {
  if ($(this).scrollTop() > 50) {
    $(".header").addClass("scrolled");
  } else {
    $(".header").removeClass("scrolled");
  }
});

$(window).on('scroll', function () {
  var scrollPos = $(document).scrollTop();
  $('.nav-link').each(function () {
    var currLink = $(this);
    var targetId = currLink.attr('href');

    if (targetId.startsWith('#')) {
      var refElement = $(targetId);

      if (refElement.length &&
        refElement.offset().top <= scrollPos + 150 &&
        refElement.offset().top + refElement.height() > scrollPos + 150) {

        $('.nav-link').removeClass('active');
        currLink.addClass('active');
      }
    }
  });
});

$(document).ready(function () {

  $(document).on("click", ".header .hamburger-menu", function (e) {
    e.stopPropagation();

    const $header = $(this).closest(".header");

    $(this).toggleClass("is-active");
    $header.find(".nav-wrapper").toggleClass("open");
  });

  // Outside click → close menu (sirf us header ka)
  $(document).on("click", function () {
    $(".header").each(function () {
      $(this).find(".hamburger-menu").removeClass("is-active");
      $(this).find(".nav-wrapper").removeClass("open");
    });
  });

  // Header ke andar click par close na ho
  $(document).on("click", ".header", function (e) {
    e.stopPropagation();
  });

});
