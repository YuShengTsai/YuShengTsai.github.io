var windowHeight = window.innerHeight,
  gridTop = windowHeight * 0.2,
  gridBottom = windowHeight * 0.8;
  $(window).on('scroll', function() {
    $('.bar').each(function() {
    var thisTop = jQuery(this).offset().top - $(window).scrollTop();
    if (thisTop >= gridTop && (thisTop + $(this).height()) <= gridBottom) {
       $('.bar .value').show("slide", { direction: "left" }, 1000);
    }
    else {
      $('.bar .value').hide();
    }
  });
});

$(window).trigger('scroll');