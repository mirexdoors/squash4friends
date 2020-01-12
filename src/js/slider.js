import $ from 'jquery';
import 'slick-carousel';

$(`#main-slider`).slick({
  dots: true,
  appendDots: $(`.slider__paginationContainer`),
  arrows: true,
  autoplay: true,
  speed: 500,
  dotsClass: `paginationBlock__container`,
});

$(`#insta-slider`).slick({
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  appendDots: $(`.instagram__pagination`),
  arrows: false,
  autoplay: true,
  speed: 500,
  dotsClass: `paginationBlock__container`,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});

$(`#ambassador-slider`).slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  appendDots: $(`.ambassadors__pagination`),
  arrows: false,
  autoplay: true,
  speed: 500,
  dotsClass: `paginationBlock__container`,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(`#articles-slider`).slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  appendDots: $(`.articles__pagination`),
  arrows: false,
  autoplay: true,
  speed: 500,
  dotsClass: `paginationBlock__container`,
});
$(`#orders-slider`).slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: $(`.orders__pagination`),
  arrows: false,
  autoplay: true,
  speed: 500,
  mobileFirst: true,
  dotsClass: `paginationBlock__container`,
  responsive: [
    {
      breakpoint: 1023,
      settings: `unslick`,
    },
  ],
});

$(`#club-slider`).slick({
  dots: true,
  appendDots: $(`.clubSlider__pagination`),
  arrows: false,
  autoplay: true,
  speed: 500,
  dotsClass: `paginationBlock__container`,
});
$(`#story-slider`).slick({
  dots: true,
  appendDots: $(`.storySlider__pagination`),
  arrows: false,
  autoplay: true,
  speed: 500,
  dotsClass: `paginationBlock__container`,
});
$(`.slick-prev`).on(`click`, function () {
  const sliderSelector = `#` + $(this).data(`slider`);
  $(sliderSelector).slick(`slickPrev`);
});

$(`.slick-next`).on(`click`, function () {
  const sliderSelector = `#` + $(this).data(`slider`);
  $(sliderSelector).slick(`slickNext`);
});
