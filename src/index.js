import './css/style.css';
import './js/slider';
import './js/searchBox';
import './js/modal';
import { init } from './js/map';

document.addEventListener(`DOMContentLoaded`, () => {
    ymaps.ready(init);
});
