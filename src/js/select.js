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

  /* смена связанных селектов */
  const countryId = $(this).data(`id`);
  if (parentBox.find(`select[name="country"]`).length) {
    const cityBlockSelect = parentBox.parent().find(`select[name="city"]`);
    if (cityBlockSelect.length) {
      /* Показываем нужные элементы */
      const cityParentBox = cityBlockSelect.parents('.selectBox');
      const pseudoCities = cityParentBox.find('.js-pseudo-options li');
      const cityPseudoSelect = cityParentBox.find('.js-pseudo-select');
      let isFirst = false;
      let firstCity = ``;
      $.each(pseudoCities, function () {
        if ($(this).data(`id`) === countryId) {
          $(this).show();
          if (!isFirst) {
            firstCity = $(this).find(`.selectBox__value`).text();
            isFirst = true;
          }
        } else {
          $(this).hide();
        }
      });

      if (firstCity.length) {
        /* Показываем в селекте городов первый элемент */
        if (cityPseudoSelect.find(`.selectBox__value`).length) {
          cityParentBox.find(`.js-pseudo-select`).find(`.selectBox__value`).text(firstCity);
        } else {
          cityPseudoSelect.removeClass(`selectBox__pseudoCurrent--placeholder`);
          cityPseudoSelect.text(firstCity);
        }


        /* Меняем нативный селект */
        cityBlockSelect.val(firstCity);
      }
    }
  }
});
