// import Header from './header/Header';
import Cards from './main/cards/Cards';
import Sort from './main/sort/Sort';
import Filter from './main/filter/Filter';
import Slider from './main/slider/Slider';
import { ProductsInterfase } from '../appTypes/Interfase';
import Header from './header/Header';

class AppView {
  header: Header;

  sort: Sort;

  filter: Filter;

  slider: Slider;

  cards: Cards;

  constructor() {
    this.header = new Header();
    this.sort = new Sort();
    this.filter = new Filter();
    this.slider = new Slider();
    this.cards = new Cards();
  }

  drawHeader(): void {
    this.header.render(8);
  }

  showSort(): void {
    this.sort.addSort();
    this.sort.addSearch();
  }

  showFilter(): void {
    this.filter.addCompany();
    this.filter.addPower();
    this.filter.addColor();
    this.filter.addPopular();
  }

  showSlider(): void {
    this.slider.addSliderPrice();
    this.slider.addSliderQuantity();
  }

  drawCards(data: ProductsInterfase[]): void {
    this.cards.render(data);
  }
}
export default AppView;
