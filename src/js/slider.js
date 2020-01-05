import $ from 'jquery';
import 'slick-carousel';

$(`#main-slider`).slick({
  dots: true,
  appendDots: $(`.slider__paginationContainer`),
  arrows: false,
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
