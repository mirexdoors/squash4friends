export const init = () => {
    const coords = [55.72, 37.684];
    const myMap = new ymaps.Map("map", {
            center: coords,
            zoom: 13,
            controls: [],
        }),
        MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            `<div class="baloon">
                <div class="baloon__title">$[properties.clubName]</div>
                <div class="baloon__address">$[properties.clubAddress]</div>
                <div class="baloon__metro">$[properties.clubMetro]</div>
                <div class="clubInfo">
                    <div class="clubPhone">$[properties.clubPhone]</div>                    
                    <div class="clubSchedule">$[properties.clubSchedule]</div>
                    </div>
                </div>
                <ul class="baloon__socials">
                    <li class="baloon__socialItem">
                        <a href=$[properties.clubVK]>
                        <img class="baloon_socialImg" src="../img/vk.png">
</a>
                    </li>
                     <li class="baloon__socialItem">
                        <a href=$[properties.clubFB]>
                        <img class="baloon_socialImg" src="../img/fb.png">
</a>
                    </li>
                     <li class="baloon__socialItem">
                        <a href=$[properties.clubInsta]>
                        <img  class="baloon_socialImg" src="../img/ig.png">
</a>
                    </li>
                     <li class="baloon__socialItem">
                        <a href=$[properties.clubYT]>
                        <img class="baloon_socialImg" src="../img/yt.png">
</a>
                    </li>
                </ul>
            </div>`,
        ),
        myPlacemark = new ymaps.Placemark(coords, {
            clubName: `«Москва»`,
            clubAddress: `Шарикоподшипниковская 13 стр. 46`,
            clubMetro: `Волгоградский проспект`,
            clubPhone: `+7 (495) 118-30-50<br>+7(905) 714-33-04`,
            clubSchedule: `Пн—Пт 7:00—23:00<br>Сб—Вс 8:00—22:00`,
            clubVK: `https://vk.com`,
            clubYT: `https://youtube.com`,
            clubInsta: `https://instagram.com`,
            clubFB: `https://facebook.com`,
        }, {
            balloonContentLayout: MyBalloonContentLayout,
            hideIconOnBalloonOpen: false,
            balloonOffset: [0, -30],
            iconLayout: `default#image`,
            iconImageHref: `/img/baloon.png`,
            iconImageSize: [30, 42],
        });
    myMap.geoObjects.add(myPlacemark);
};
