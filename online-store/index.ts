import './global.scss';
import header from './components/views/header/Header';
import sort from './components/views/main/sort/Sort';
import search from './components/views/main/search/Search';
import cards from './components/views/main/cards/Cards';

header.render(7);
sort.render();
search.render();
cards.render();
