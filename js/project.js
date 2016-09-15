define(['jquery', 'slick'], function(){

  $.fn.ravno = function () {
    var maxH = -1;
    var $cols = $(this).height("auto").each(function () {
      var h = $(this).height();
      maxH = (h > maxH) ? h : maxH;
    });
    $cols.height(maxH);
  };

  $('.site-slider').slick({
    prevArrow: $('.left'),
    nextArrow: $('.right'),
    dots: true
  });

  $('.bottom-slider').slick({
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    slidesToShow: 5
  });

});


