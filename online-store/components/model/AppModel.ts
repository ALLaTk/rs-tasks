import { ProductsInterfase, FilterInterfase } from '../appTypes/Interfase';
import AppView from '../views/AppView';
class AppModel {
  products: ProductsInterfase[];

  filterProducts: ProductsInterfase[];

  filterColor: string[];

  filterPower: string[];
  filterPopular: string[];
  filters: FilterInterfase<string | number>
  view: AppView;

  constructor(products: ProductsInterfase[]) {
    this.products = products;
    this.filters = {
      "id": [],
      "company": [],
      "power": [],
      "color": [],
      "quantity": [],
      "price": [],
      "popular": [],
    };
    this.filterProducts = [];
    this.filterColor = [];
    this.filterPower = [];
    this.filterPopular = [];
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
      sortArr.sort((a, b) => (a.name > b.name ? 1 : -1));
      this.view.drawCards(sortArr);
    }
    if (value === '4') {
      sortArr.sort((a, b): number => (a.name < b.name ? 1 : -1));
      this.view.drawCards(sortArr);
    }
  }

  filterArray(array: ProductsInterfase[], 
             filters: FilterInterfase<string | number>)
             :ProductsInterfase[] {
    const filterKeys = Object.keys(filters);
    return array.filter((item: ProductsInterfase) => {
    return filterKeys.every(key => {
      if (!filters[key].length) return true;
      return filters[key].find(filter => filter === (<string & number>item)[key]);
    });
    });
  }

  findColor(value: string, check: boolean): void {
    if (check) {
      this.filters.color.push(value)
    }
    else {
      this.filters.color.splice(this.filters.color.indexOf(value), 1)
      } 
     this.view.drawCards(this.filterArray(this.products, this.filters));  
  }
  
  findPower(value: string, check: boolean): void {
     if (check) {
      this.filters.power.push(value)
    }
    else {
      this.filters.power.splice(this.filters.power.indexOf(value), 1)
      } 
     this.view.drawCards(this.filterArray(this.products, this.filters));  
  }

  findPopular(check: boolean) {
    if (check) {
      this.filters.popular.push("yes")
    }
    else {
      this.filters.popular.splice(this.filters.popular.indexOf("yes"), 1)
      } 
     this.view.drawCards(this.filterArray(this.products, this.filters));
  }
}

export default AppModel;
