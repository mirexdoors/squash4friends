import './css/style.css';
import {init} from './js/map';

document.addEventListener(`DOMContentLoaded`, () => {
    ymaps.ready(init);
});
