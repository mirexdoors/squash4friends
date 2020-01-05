import $ from 'jquery';

$(`.js-detail`).on(`click`, function () {
  const parent = $(this).parent();
  const content = parent.find(`.js-content`);
  if (parent.hasClass(`open`)) {
    content.slideUp();
    parent.removeClass(`open`);
  } else {
    content.slideDown();
    parent.addClass(`open`);
  }
});
