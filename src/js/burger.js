import $ from 'jquery';

$(`.js-burger`).on(`click`, function () {
  $(this).toggleClass(`open`);
  $(`.js-navigation`).toggleClass(`open`);
  if ($(this).hasClass(`open`)) {
    $(`.darkenMask`).show();
    $(`body`).addClass(`darken`);
    $(`.topBar`).addClass(`sticky`);
    $(`.header`).addClass(`sticky`);
  } else {
    $(`.darkenMask`).hide();
    $(`body`).removeClass(`darken`);
    $(`.topBar`).removeClass(`sticky`);
    $(`.header`).removeClass(`sticky`);
  }
});
