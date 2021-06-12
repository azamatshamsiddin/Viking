$(function () {
  $('.heroes__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-text',
    prevArrow: '<button class="slick-btn slick-prev"><img class="slick__arrow-left" src="images/arrow-left.png" alt="arrow prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img class="slick__arrow-right" src="images/arrow-right.png" alt="arrow next"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        }
      },

    ]
  });

  $('.heroes__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-img',
    fade: true,
    arrows: false
  });


});