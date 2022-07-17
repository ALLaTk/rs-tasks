import Cards from './main/cards/Cards';
import Sort from './main/sort/Sort';
import Filter from './main/filter/Filter';
import Slider from './main/slider/Slider';
import Reset from './main/reset/Reset';
import { ProductsInterfase } from '../appTypes/Interfase';
import Header from './header/Header';
import Footer from './footer/Footer';

class AppView {
  header: Header;

  sort: Sort;

  filter: Filter;

  slider: Slider;

  reset: Reset;

  cards: Cards;

  footer: Footer;

  constructor() {
    this.header = new Header();
    this.sort = new Sort();
    this.filter = new Filter();
    this.slider = new Slider();
    this.reset = new Reset();
    this.cards = new Cards();
    this.footer = new Footer();
  }

  drawHeader(item: number): void {
    this.header.renderHeader(item);
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

  showResets(): void {
    this.reset.addResetFilters();
    this.reset.addResetSetting();
  }

  drawCards(data: ProductsInterfase[]): void {
    this.cards.renderCards(data);
  }

  drawFooter(): void {
    this.footer.render();
  }
}
export default AppView;
