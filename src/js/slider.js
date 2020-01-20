import $ from 'jquery';
import 'slick-carousel';

const simpleslider = require(`simple-slider`);

function setPagination() {
  const index = mainSlider.currentIndex();
  $(`.js-paginationBlock li.active`).removeClass(`active`);
  $(`.js-paginationBlock  li[data-index="${index}"]`).addClass(`active`);
};

const mainSlider = simpleslider.getSlider({
  container: document.getElementById(`main-slider`),
  prop: `opacity`,
  unit: ``,
  init: 0,
  show: 1,
  end: 0,
  onChange: setPagination,
});

if (document.getElementById(`main-slider-prev`)) {
  document.getElementById(`main-slider-prev`).addEventListener(`click`, () => {
    mainSlider.prev();
  });
}
if (document.getElementById(`main-slider-next`)) {
  document.getElementById(`main-slider-next`).addEventListener(`click`, () => {
    mainSlider.next();
  });
}

$(`.js-paginationBlock`).on(`click`, `li`, function () {
  const index = $(this).data(`index`);
  mainSlider.change(index);
  $(`.js-paginationBlock li.active`).removeClass(`active`);
  $(this).addClass(`active`);
  mainSlider.pause();
  setTimeout(mainSlider.resume(), 500);
});

$(`#insta-slider`).slick({
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  appendDots: $(`.instagram__pagination`),
  arrows: false,
  autoplay: false,
  speed: 500,
  dotsClass: `paginationBlock__container`,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },
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
  autoplay: false,
  speed: 500,
  dotsClass: `paginationBlock__container`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
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
  autoplay: false,
  speed: 500,
  dotsClass: `paginationBlock__container`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
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
