import {handleTabClick, tabButtons} from '../scripts/tabs.js';

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);