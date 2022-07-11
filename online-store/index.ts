import './global.scss';
import header from './components/views/header/Header';
import sort from './components/views/main/sort/Sort';
import cards from './components/views/main/cards/Cards';
import filter from './components/views/main/filter/Filter';

header.render(7);
cards.render();
sort.renderSort();
sort.renderSearch();
filter.changeCompany();
filter.changePower();
filter.changeColor();
filter.changePopular();
