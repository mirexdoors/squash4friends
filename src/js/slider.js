import $ from 'jquery';
import 'lightslider/dist/css/lightslider.min.css';

window.$ = window.jQuery = require(`jquery`);
require(`lightslider`);
const simpleslider = require(`simple-slider`);

if (document.getElementById(`main-slider`)) {
  const mainSlider = window.mainSlider = simpleslider.getSlider({
    container: document.getElementById(`main-slider`),
    prop: `opacity`,
    unit: ``,
    init: 0,
    show: 1,
    end: 0,
    onChange: () => {
      const index = mainSlider.currentIndex();
      $(`.js-paginationBlock li.active`).removeClass(`active`);
      $(`.js-paginationBlock  li[data-index="` + index + `"]`).addClass(`active`);
    },
  });
}


if (document.getElementById(`main-slider-prev`)) {
  document.getElementById(`main-slider-prev`).addEventListener(`click`, () => {
    window.mainSlider.prev();
  });
}
if (document.getElementById(`main-slider-next`)) {
  document.getElementById(`main-slider-next`).addEventListener(`click`, () => {
    window.mainSlider.next();
  });
}

$(`.js-paginationBlock`).on(`click`, `li`, function () {
  const index = $(this).data(`index`);
  window.mainSlider.change(index);
  $(`.js-paginationBlock li.active`).removeClass(`active`);
  $(this).addClass(`active`);
  window.mainSlider.pause();
  setTimeout(window.mainSlider.resume(), 500);
});

$(`#insta-slider`).lightSlider({
  item: 4,
  autoWidth: false,
  slideMove: 1,
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
  enableTouch: false,
  enableDrag: false,
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
  onSliderLoad: (slider) => {
    const parent = slider.parents(`.instagram`);
    const pagination = parent.find(`.lSPager`);
    const pagWidth = pagination.width() + 26;
    let style = `right:${pagWidth}px`;
    if (window.innerWidth < 768) {
      style = ``;
    }
    pagination.before(`<button style="${style}" class="slick-prev paginationBlock__item"  aria-label="Previous" type="button">&larr;</button>`);

    if (window.innerWidth < 768) {
      style = `left: calc(${pagWidth}px)`;
    } else {
      style = ``;
    }
    pagination.parent().append(`<button style="${style}"  class="slick-next paginationBlock__item" aria-label="Next" type="button">&rarr;</button>`);
    parent.find(`.slick-prev`).on(`click`, () => {
      slider.goToPrevSlide();
    });

    parent.find(`.slick-next`).on(`click`, () => {
      slider.goToNextSlide();
    });
  },
});

//
$(`#ambassador-slider`).lightSlider({
  item: 3,
  autoWidth: false,
  slideMove: 1,
  slideMargin: 12,

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
  enableTouch: false,
  enableDrag: false,
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
  onSliderLoad: (slider) => {
    const parent = slider.parents(`.ambassadors`);
    const pagination = parent.find(`.lSPager`);
    const pagWidth = pagination.width() + 26;
    let style = `right:${pagWidth}px`;

    if (window.innerWidth < 768) {
      style = ``;
    }
    pagination.before(`<button style="${style}" class="slick-prev paginationBlock__item"  aria-label="Previous" type="button">&larr;</button>`);

    if (window.innerWidth < 768) {
      style = `left: calc(${pagWidth}px)`;
    } else {
      style = ``;
    }
    pagination.parent().append(`<button style="${style}" class="slick-next paginationBlock__item" aria-label="Next" type="button">&rarr;</button>`);

    parent.find(`.slick-next`).on(`click`, () => {
      slider.goToNextSlide();
    });
    parent.find(`.slick-prev`).on(`click`, () => {
      slider.goToPrevSlide();
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
  enableTouch: false,
  enableDrag: false,
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
  onSliderLoad: (slider) => {
    const parent = slider.parents(`.articles`);
    const pagination = parent.find(`.lSPager`);
    const pagWidth = pagination.width() + 26;

    let style = `right:${pagWidth}px`;
    if (window.innerWidth < 768) {
      style = ``;
    }
    pagination.before(`<button style="${style}" class="slick-prev paginationBlock__item" aria-label="Previous" type="button">&larr;</button>`);

    if (window.innerWidth < 768) {
      style = `left: calc(${pagWidth}px)`;
    } else {
      style = ``;
    }
    pagination.parent().append(`<button style="${style}"  class="slick-next paginationBlock__item" aria-label="Next" type="button">&rarr;</button>`);

    parent.find(`.slick-prev`).on(`click`, () => {
      slider.goToPrevSlide();
    });

    parent.find(`.slick-next`).on(`click`, () => {
      slider.goToNextSlide();
    });
  },
});

if (window.innerWidth < 1024) {
  $(`#orders-slider`).lightSlider({
    item: 1,
    autoWidth: false,
    slideMove: 1,
    slideMargin: 12,

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
    currentPagerPosition: `middle`,
    keyPress: false,
    controls: false,

    rtl: false,
    adaptiveHeight: false,
    vertical: false,
    pager: true,
    enableTouch: false,
    enableDrag: false,
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
    onSliderLoad: (slider) => {
      const parent = slider.parents(`.orders`);
      const pagination = parent.find(`.lSPager`);
      const pagWidth = (pagination.width() / 2) + 26;

      let style = `left: calc(50% - ${pagWidth}px)`;
      pagination.before(`<button style="${style}" class="slick-prev paginationBlock__item"  aria-label="Previous" type="button">&larr;</button>`);


      style = `right: calc(50% - ${pagWidth}px)`;

      pagination.parent().append(`<button style="${style}" class="slick-next paginationBlock__item" aria-label="Next" type="button">&rarr;</button>`);

      parent.find(`.slick-prev`).on(`click`, () => {
        slider.goToPrevSlide();
      });

      parent.find(`.slick-next`).on(`click`, () => {
        slider.goToNextSlide();
      });
    },
  });
}
// $(`#club-slider`).slick({
//   dots: true,
//   appendDots: $(`.clubSlider__pagination`),
//   arrows: false,
//   autoplay: true,
//   speed: 500,
//   dotsClass: `paginationBlock__container`,
// });

$(`#story_slider`).lightSlider({
  item: 1,
  autoWidth: false,
  slideMove: 1,
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
  currentPagerPosition: `middle`,
  keyPress: false,
  controls: false,

  rtl: false,
  adaptiveHeight: false,
  vertical: false,
  pager: true,
  enableTouch: false,
  enableDrag: false,
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
  onSliderLoad: (slider) => {
    const parent = slider.parents(`.ambassadorStory`);
    const pagination = parent.find(`.lSPager`);
    const pagWidth = pagination.width() + 49;

    let style = `right: calc(${pagWidth}px - 33px)`;
    if (window.innerWidth < 1024) {
      style = `left: calc(50% - ${pagWidth}px / 2)`;
    }
    pagination.before(`<button style="${style}" class="slick-prev paginationBlock__item" aria-label="Previous" type="button">&larr;</button>`);

    if (window.innerWidth > 1023) {
      style = `right: 0`;
    } else {
      style = `right: calc(50% - ${pagWidth}px / 2)`;
    }
    pagination.parent().append(`<button style="${style}"  class="slick-next paginationBlock__item" aria-label="Next" type="button">&rarr;</button>`);

    parent.find(`.slick-prev`).on(`click`, () => {
      slider.goToPrevSlide();
    });

    parent.find(`.slick-next`).on(`click`, () => {
      slider.goToNextSlide();
    });
  },
});
