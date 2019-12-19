import './css/style.css';
import  $ from 'jquery';
import './js/slider';
import { init } from './js/map';

document.addEventListener(`DOMContentLoaded`, () => {
    ymaps.ready(init);

});
