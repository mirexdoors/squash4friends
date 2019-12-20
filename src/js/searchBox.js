import $ from "jquery";

const hideSearchBox = () => {
    $(`.searchBox`).slideUp();
    $(`.darkenMask`).hide();
    $(`body`).removeClass(`darken`);
};
const showSearchBox = () => {
    $(`.searchBox`).slideDown();
    $(`.darkenMask`).show();
    $(`body`).addClass(`darken`);
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
    if (!$(target).hasClass(`js-search-icon`)) {
        const activeElement = $(`.searchBox`);
        if (!activeElement.is(target) && activeElement.has(target).length === 0) {
            hideSearchBox();
            $(`.js-search-icon`).removeClass(`active`);
        }
    }
});
