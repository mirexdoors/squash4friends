import './css/style.css';
import './js/slider';
import './js/searchBox';
import './js/modal';
import './js/spoiler';
import './js/select';
import {init} from './js/map';

document.addEventListener(`DOMContentLoaded`, () => {
  if (document.getElementById(`map`)) {
    ymaps.ready(init);
  }
});
