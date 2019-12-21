import $ from "jquery";

const hideSearchBox = () => {
    $(`.searchBox`).slideUp();
    $(`.darkenMask`).hide();
    $(`body`).removeClass(`darken`);
    window.isDarken = false;
};
const showSearchBox = () => {
    $(`.searchBox`).slideDown();
    $(`.darkenMask`).show();
    $(`body`).addClass(`darken`);
    window.isDarken = true;
};
$(`.js-search-icon`).on(`click`, function () {
    if ($(this).hasClass(`active`)) {
        hideSearchBox();
    } else {
        showSearchBox();
    }
    $(this).toggleClass(`active`);
});

$(document).click((e) => {
    const target = e.target;
    if (!$(target).hasClass(`js-search-icon`) && !$(target).hasClass(`js-openModal`) && window.isDarken === true) {
        const activeElement = $(`.searchBox`);
        const modalForm = $(`.modalForm`);
        if (!activeElement.is(target) && activeElement.has(target).length === 0 && !modalForm.is(target) && modalForm.has(target).length === 0) {
            hideSearchBox();
            $(`.modalForm`).fadeOut();
            $(`.js-search-icon`).removeClass(`active`);
        }
    }
});
