import $ from 'jquery';

// закрытие селектов по клику вне
$(document).click((e) => {
  const selects = $(`.js-pseudo-select`);
  $.each(selects, function () {
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $(this).parent().find(`.selectBox__pseudoList`).hasClass(`isOpen`)) {
      $(this).parent().find(`.selectBox__pseudoList`).toggleClass(`isOpen`);
    }
  });
});

$(`.js-pseudo-select`).on(`click`, function () {
  $(this).parent().find(`.selectBox__pseudoList`).toggleClass(`isOpen`);
});


$(`.js-pseudo-options`).on(`click`, `li`, function () {
  // имитируем выбор селекта
  const parentBox = $(this).parents(`.selectBox`);
  const select = parentBox.find(`.select`);
  const value = $(this).find(`.selectBox__value`);
  select.val(value.text().trim());
  // меняем псевдоселект
  parentBox.find(`.js-pseudo-select`).html(value.parent().html());
  parentBox.find(`.js-pseudo-select`).removeClass(`selectBox__pseudoCurrent--placeholder`);

  $(this).parent().toggleClass(`isOpen`);
});
