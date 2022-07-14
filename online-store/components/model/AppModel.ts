import { ProductsInterfase, FilterInterfase } from '../appTypes/Interfase';
import AppView from '../views/AppView';
class AppModel {
  products: ProductsInterfase[];

  filterProducts: ProductsInterfase[];

  filters: FilterInterfase<string | number>;

  view: AppView;

  constructor(products: ProductsInterfase[]) {
    this.products = products;
    this.filters = {
      id: [],
      company: [],
      power: [],
      color: [],
      quantity: [],
      price: [120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440, 460, 480, 500, 520],
      popular: [],
    };
    this.filterProducts = [];
    this.view = new AppView();
  }

  sortProducts(): ProductsInterfase[] {
    return this.filterProducts;
  }

  addheader(): void {
    this.view.drawHeader();
  }

  startCards(): void {
    this.view.drawCards(this.products);
  }

  doSort(value: string): void {
    let sortArr: ProductsInterfase[] = [];
    if (this.filterProducts.length) {
      sortArr = this.filterProducts;
    } else sortArr = this.products;
    if (value === '1') {
      sortArr.sort((a, b): number => (a.price > b.price ? 1 : -1));
      this.view.drawCards(sortArr);
    }
    if (value === '2') {
      sortArr.sort((a, b): number => (a.price < b.price ? 1 : -1));
      this.view.drawCards(sortArr);
    }
    if (value === '3') {
      sortArr.sort((a, b): number => (a.name > b.name ? 1 : -1));
      this.view.drawCards(sortArr);
    }
    if (value === '4') {
      sortArr.sort((a, b): number => (a.name < b.name ? 1 : -1));
      this.view.drawCards(sortArr);
    }
  }

  filterArray(array: ProductsInterfase[], filters: FilterInterfase<string | number>): ProductsInterfase[] {
    const filterKeys = Object.keys(filters);
    return array.filter((item: ProductsInterfase) => {
      return filterKeys.every((key) => {
        if (!filters[key].length) return true;
        return filters[key].find((filter) => filter === (<string & number>item)[key]);
      });
    });
  }

  findColor(value: string, check: boolean): void {
    if (check) {
      this.filters.color.push(value);
    } else {
      this.filters.color.splice(this.filters.color.indexOf(value), 1);
    }
    this.view.drawCards(this.filterArray(this.products, this.filters));
  }

  findPower(value: string, check: boolean): void {
    if (check) {
      this.filters.power.push(value);
    } else {
      this.filters.power.splice(this.filters.power.indexOf(value), 1);
    }
    this.view.drawCards(this.filterArray(this.products, this.filters));
  }

  findPopular(check: boolean): void {
    if (check) {
      this.filters.popular.push('yes');
    } else {
      this.filters.popular.splice(this.filters.popular.indexOf('yes'), 1);
    }
    this.view.drawCards(this.filterArray(this.products, this.filters));
  }

  findCompany(value: string, check: boolean): void {
    if (check) {
      this.filters.company.push(value);
    } else {
      this.filters.company.splice(this.filters.company.indexOf(value), 1);
    }
    this.view.drawCards(this.filterArray(this.products, this.filters));
  }

  findPrice(valueMin: string, valueMax: string): void {
    let priceFilter = { ...this.filters };
    const range = priceFilter.price.slice(
      priceFilter.price.indexOf(+valueMin),
      priceFilter.price.indexOf(+valueMax) + 1
    );
    priceFilter.price = range;

    this.view.drawCards(this.filterArray(this.products, priceFilter));
    priceFilter = { ...this.filters };
  }
}

export default AppModel;
