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

if (document.getElementById(`main-slider`)) {
  const mainSlider = simpleslider.getSlider({
    container: document.getElementById(`main-slider`),
    prop: `opacity`,
    unit: ``,
    init: 0,
    show: 1,
    end: 0,
    onChange: setPagination,
  });
}


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

$(`#insta-slider`).lightSlider({
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
    let style = `right:` + pagWidth + `px`;
    if (window.innerWidth < 768) {
      style = ``;
    }
    pagination.before(`<button style="` + style + `" class="slick-prev paginationBlock__item" data-slider="insta_slider"
                                aria-label="Previous" type="button">&#11104;
                        </button>`);

    if (window.innerWidth < 768) {
      style = `left: ` + pagWidth + `px`;
    } else {
      style = ``;
    }
    pagination.parent().append(`<button style="` + style + `" data-slider="insta_slider" class="slick-next paginationBlock__item"
    aria-label="Next" type="button">&#10141;</button>`);

    parent.find(`.slick-prev`).on(`click`, function () {
      slider.goToPrevSlide();
    });

    parent.find(`.slick-next`).on(`click`, function () {
      slider.goToNextSlide();
    });
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
  onSliderLoad: function (slider) {
    const parent = slider.parents(`.ambassadors`);
    const pagination = parent.find(`.lSPager`);
    const pagWidth = pagination.width() + 36;
    let style = `right:` + pagWidth + `px`;
    if (window.innerWidth < 768) {
      style = ``;
    }
    pagination.before(`<button style="` + style + `" class="slick-prev paginationBlock__item" data-slider="insta_slider"
                                aria-label="Previous" type="button">&#11104;
                        </button>`);

    if (window.innerWidth < 768) {
      style = `left: ` + pagWidth + `px`;
    } else {
      style = ``;
    }
    pagination.parent().append(`<button style="` + style + `" data-slider="insta_slider" class="slick-next paginationBlock__item"
    aria-label="Next" type="button">&#10141;</button>`);

    parent.find(`.slick-next`).on(`click`, function () {
      slider.goToNextSlide();
    });
  },
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
  onSliderLoad: function (slider) {
    const parent = slider.parents(`.articles`);
    const pagination = parent.find(`.lSPager`);
    const pagWidth = pagination.width() + 36;

    let style = `right:` + pagWidth + `px`;
    if (window.innerWidth < 768) {
      style = ``;
    }
    pagination.before(`<button style="` + style + `" class="slick-prev paginationBlock__item" data-slider="insta_slider"
                                aria-label="Previous" type="button">&#11104;
                        </button>`);

    if (window.innerWidth < 768) {
      style = `left: ` + pagWidth + `px`;
    } else {
      style = ``;
    }
    pagination.parent().append(`<button style="` + style + `" data-slider="insta_slider" class="slick-next paginationBlock__item"
    aria-label="Next" type="button">&#10141;</button>`);

    parent.find(`.slick-prev`).on(`click`, function () {
      slider.goToPrevSlide();
    });

    parent.find(`.slick-next`).on(`click`, function () {
      slider.goToNextSlide();
    });
  },
});

if (window.innerWidth < 1024) {
  $(`#orders-slider`).lightSlider({
    item: 1,
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
    currentPagerPosition: 'middle',
    keyPress: false,
    controls: false,

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
        breakpoint: 479,
        settings: {
          slideMargin: 0,
        },
      },
    ],
    onSliderLoad: function (slider) {
      const parent = slider.parents(`.orders`);
      const pagination = parent.find(`.lSPager`);
      const pagWidth = (pagination.width()/2)  + 26;

      let style = `left: calc(50% - ` + pagWidth + `px)`;
      pagination.before(`<button style="` + style + `" class="slick-prev paginationBlock__item" data-slider="insta_slider"
                                aria-label="Previous" type="button">&#11104;
                        </button>`);


        style = `right: calc(50% - ` + pagWidth + `px)`;

      pagination.parent().append(`<button style="` + style + `" data-slider="insta_slider" class="slick-next paginationBlock__item"
    aria-label="Next" type="button">&#10141;</button>`);

      parent.find(`.slick-prev`).on(`click`, function () {
        slider.goToPrevSlide();
      });

      parent.find(`.slick-next`).on(`click`, function () {
        slider.goToNextSlide();
      });
    },
  });
}
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
