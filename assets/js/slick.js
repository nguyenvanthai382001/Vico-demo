    $('.employee-list').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll :1,
        centerPadding: '0px',
        infinite: true,
        speed: 500,
        centerMode :true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        prevArrow:"<button type='button' class='slick-prev pull-left'><ion-icon name='chevron-back-outline'></ion-icon></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><ion-icon name='chevron-forward-outline'></ion-icon></button>"
    });

  $('.feedback-list').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    centerMode :true, 
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ],
    prevArrow:"<button type='button' class='slick-prev pull-left'><ion-icon name='chevron-back-outline'></ion-icon></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><ion-icon name='chevron-forward-outline'></ion-icon></button>"
  });
