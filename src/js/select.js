import $ from 'jquery';

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
  // закрываем окно
  $(this).parent().toggleClass(`isOpen`);
});
