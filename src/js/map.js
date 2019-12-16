export const init = () => {
    const coords = [55.72, 37.684];
    const myMap = new ymaps.Map("map", {
            center: coords,
            zoom: 13,
            controls: [],
        }),
        myPlacemark = new ymaps.Placemark(coords, {}, {
            iconLayout: `default#image`,
            iconImageHref: '/img/baloon.png',
            iconImageSize: [30, 42],
        });
    myMap.geoObjects.add(myPlacemark);
};
