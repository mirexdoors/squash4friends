import $ from 'jquery';

$(`.js-pseudo-select`).on(`click`, function () {
  $(this).parent().find(`.selectBox__pseudoList`).toggleClass(`isOpen`);
});
