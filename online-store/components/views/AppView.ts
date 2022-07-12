// import Header from './header/Header';
import Cards from './main/cards/Cards';
import Sort from './main/sort/Sort';
import Filter from './main/filter/Filter';
import ProductsInterfase from '../appTypes/Interfase';
import Header from './header/Header';

class AppView {
  header: Header;
  sort: Sort;
  filter: Filter;
  cards: Cards;

  constructor() {
    this.header = new Header()
    this.sort = new Sort();
    this.filter = new Filter();
    this.cards = new Cards();
  }

  drawHeader(): void {
    this.header.render(8);
  }

  renderSort(): void {
    this.sort.addSort();
    this.sort.addSearch();
  }

  renderFilter(): void {
    this.filter.addCompany();
    this.filter.addPower();
    this.filter.addColor();
    this.filter.addPopular();
  }

  drawCards(data: ProductsInterfase[]): void {
    this.cards.render(data);
  }

  deleteCards(){
   return this.cards.deleteCards();
  }

}
export default AppView;