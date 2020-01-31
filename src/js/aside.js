import $ from 'jquery';

if (window.innerWidth > 1023) {
  const block = $(`.js-fixPromo`);

  if (block.length > 0) {
    const offset = block.offset().top - 50;
    const blockWidth = block.outerWidth();
    const blockHeight = block.outerHeight() + 60;
    const sectionEndPosition = $(`section.content`).innerHeight() + $(`section.content`).offset().top;
    $(window).scroll(() => {
      const top = $(document).scrollTop();
      if ((top + blockHeight) >= sectionEndPosition- 60) {
        block.css(`position`, `absolute`);
        block.css(`top`, (sectionEndPosition - blockHeight) + `px`);
      } else {
        block.attr(`style`, ``);
        block.css(`width`, blockWidth);
        if (top >= offset) {
          if (!block.hasClass(`fixed`)) {
            block.addClass(`fixed`);
          }
        } else {
          if (block.hasClass(`fixed`)) {
            block.removeClass(`fixed`);
          }
        }
      }
    });
  }
}
