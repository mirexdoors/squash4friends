import './css/style.css';
import './js/slider';
import './js/searchBox';
import { init } from './js/map';

document.addEventListener(`DOMContentLoaded`, () => {
    ymaps.ready(init);
});
