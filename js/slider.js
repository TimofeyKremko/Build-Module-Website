$(function() {
    $(".category__slider").slick({
      slidesToShow: 3,
      infinite: true,
      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: true,
            centerMode: true,
          },
        },
      ],
    });
})
