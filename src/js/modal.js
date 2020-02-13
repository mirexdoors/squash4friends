import $ from "jquery";

function getCookie(name) {
  const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function createCookie(name, value, hours) {
  let expires = ``;
  if (hours) {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    expires = `; expires=${date.toGMTString()}`;
  }
  document.cookie = `${name}=${value + expires}; path=/`;
}

$(`.js-openModal`).on(`click`, function () {
  const modalId = $(this).data(`modal`);
  if (modalId && $(modalId).length > 0) {
    $(`${modalId}`).fadeIn();
    $(`.darkenMask`).show();
    $(`body`).addClass(`darken`);
    $(`body`).addClass(`darken--mobile`);
    window.isDarken = true;
  }
});

$(`.js-formClose`).on(`click`, function () {
  const form = $(this).parent();
  form.fadeOut();
  $(`.darkenMask`).hide();
  $(`body`).removeClass(`darken`);
  $(`body`).removeClass(`darken--mobile`);
});

/* ввод в инпут */
$(`input.required`).on(`input`, function () {
  if ($(this).parent().hasClass(`error`)) {
    $(this).parent().removeClass(`error`);
  }
});
/* проверяем localstorage на показ блока из ИГ */
if (!getCookie(`isShowInsta`)) {
  setTimeout(() => {
    $(`.darkenMask`).show();
    $(`body`).addClass(`darken`);
    window.isDarken = true;
    $(`#insta-modal`).fadeIn();
  }, 5000);
  createCookie(`isShowInsta`, true, 3);
}
