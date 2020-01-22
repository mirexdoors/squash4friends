import $ from 'jquery';
import 'slick-carousel';
import 'lightslider/dist/css/lightslider.min.css';

window.$ = window.jQuery = require(`jquery`);
require(`lightslider`);
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

const insta_slider = $(`#insta-slider`).lightSlider({
  item: 4,
  autoWidth: false,
  slideMove: 1, // slidemove will be 1 if loop is true
  slideMargin: 10,

  mode: `slide`,
  useCSS: true,
  cssEasing: `ease`,
  easing: `linear`,
  speed: 400,
  auto: true,
  pauseOnHover: false,
  loop: true,
  slideEndAnimation: true,
  pause: 2000,

  keyPress: false,
  controls: false,
  prevHtml: ``,
  nextHtml: ``,

  rtl: false,
  adaptiveHeight: false,
  vertical: false,
  pager: true,
  enableTouch: true,
  enableDrag: true,
  freeMove: true,
  swipeThreshold: 40,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        item: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        item: 2,
      },
    },
    {
      breakpoint: 479,
      settings: {
        item: 1,
        slideMargin: 0,
      },
    },
  ],
  onSliderLoad: function (slider) {
    const parent = slider.parents(`.instagram`);
    const pagination = parent.find(`.lSPager`);
    const pagWidth = pagination.width() + 36;
    pagination.before(`<button style="right:` + pagWidth + `px" class="slick-prev paginationBlock__item" data-slider="insta_slider"
                                aria-label="Previous" type="button">&#11104;
                        </button>`);
    pagination.parent().append(`<button data-slider="insta_slider" class="slick-next paginationBlock__item"
    aria-label="Next" type="button">&#10141;</button>`);

    parent.find(`.slick-prev`).on(`click`, function () {
      slider.goToPrevSlide();
    });

    parent.find(`.slick-next`).on(`click`, function () {
      slider.goToNextSlide();
    });
  },
  onBeforeSlide: function (el) {
  },
});


$(`#ambassador-slider`).lightSlider({
  item: 3,
  autoWidth: false,
  slideMove: 1, // slidemove will be 1 if loop is true
  slideMargin: 12,

  mode: `slide`,
  useCSS: true,
  cssEasing: `ease`,
  easing: `linear`,

  speed: 400,
  auto: false,
  pauseOnHover: false,
  loop: true,
  slideEndAnimation: true,
  pause: 2000,

  keyPress: false,
  controls: false,
  prevHtml: ``,
  nextHtml: ``,

  rtl: false,
  adaptiveHeight: false,
  vertical: false,
  pager: true,
  enableTouch: true,
  enableDrag: true,
  freeMove: true,
  swipeThreshold: 40,
  responsive: [
    {
      breakpoint: 1279,
      settings: {
        slideMargin: 10,
      },
    },
    {
      breakpoint: 1023,
      settings: {
        item: 2,
        slideMargin: 10,
      },
    },
    {
      breakpoint: 767,
      settings: {
        item: 2,
        slideMargin: 10,
      },
    },
    {
      breakpoint: 479,
      settings: {
        item: 1,
        slideMargin: 0,
      },
    },
  ],
});

$(`#articles-slider`).lightSlider({
  item: 3,
  autoWidth: false,
  slideMove: 1, // slidemove will be 1 if loop is true
  slideMargin: 12,

  mode: `slide`,
  useCSS: true,
  cssEasing: `ease`,
  easing: `linear`,

  speed: 400,
  auto: false,
  pauseOnHover: false,
  loop: true,
  slideEndAnimation: true,
  pause: 2000,

  keyPress: false,
  controls: false,
  prevHtml: ``,
  nextHtml: ``,

  rtl: false,
  adaptiveHeight: false,
  vertical: false,
  pager: true,
  enableTouch: true,
  enableDrag: true,
  freeMove: true,
  swipeThreshold: 40,
  responsive: [
    {
      breakpoint: 1279,
      settings: {
        slideMargin: 10,
      },
    },
    {
      breakpoint: 1023,
      settings: {
        item: 2,
        slideMargin: 10,
      },
    },
    {
      breakpoint: 767,
      settings: {
        item: 2,
        slideMargin: 10,
      },
    },
    {
      breakpoint: 479,
      settings: {
        item: 1,
        slideMargin: 0,
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
