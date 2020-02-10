import $ from "jquery";

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



/*ввод в инпут*/
$(`input.required`).on(`input`, function () {
    if ($(this).parent().hasClass(`error`)) {
        $(this).parent().removeClass(`error`);
    }
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
