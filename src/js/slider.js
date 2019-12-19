import $ from "jquery";
import 'slick-carousel';

$(`#main-slider`).slick({
    dots: true,
    appendDots: $('.slider__paginationContainer'),
    arrows: false,
    autoplay: true,
    speed: 500,
    dotsClass: `paginationBlock__container`,
});

$(`.slick-prev`).click(() => {
    $(`#main-slider`).slick(`slickPrev`);
});
$(`.slick-next`).click(() => {
    $(`#main-slider`).slick(`slickNext`);
});

