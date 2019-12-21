import $ from "jquery";

$(`.js-openModal`).on(`click`, function () {
    const modalId = $(this).data(`modal`);
    if (modalId && $(modalId).length > 0) {
        $(`${modalId}`).fadeIn();
        $(`.darkenMask`).show();
        $(`body`).addClass(`darken`);
        window.isDarken = true;
    }
});

$(`.js-formClose`).on(`click`, function () {
    const form = $(this).parent();
    form.fadeOut();
    $(`.darkenMask`).hide();
    $(`body`).removeClass(`darken`);
});

$(`.modalForm`).on(`submit`, function (e) {
    e.preventDefault();
    $(this).fadeOut();
    $(`#success`).fadeIn();
});

/*проверяем localstorage на показ блока из ИГ */
if (!localStorage.getItem(`isShowInsta`)) {
    setTimeout(() => {
        $(`.darkenMask`).show();
        $(`body`).addClass(`darken`);
        window.isDarken = true;
        $('#insta-modal').fadeIn();
    }, 5000);
}
