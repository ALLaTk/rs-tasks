import './global.scss';
import header from './components/views/header/Header';
import sort from './components/views/main/sort/Sort';
import cards from './components/views/main/cards/Cards';

header.render(7);
cards.render();
sort.renderSort();
sort.renderSearch();