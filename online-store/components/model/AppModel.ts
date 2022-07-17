import { ProductsInterfase, FilterInterfase } from '../appTypes/Interfase';
import AppView from '../views/AppView';
import localStore from '../localStorage/LocalStorage';
import products from '../../server/products.json';
class AppModel {
  products: ProductsInterfase[];

  filterProducts: ProductsInterfase[];

  filters: FilterInterfase<string | number>;

  view: AppView;

  constructor() {
    this.products = products;
    this.filters = {
      company: [],
      power: [],
      color: [],
      quantity: [],
      price: [],
      name: [],
      popular: [],
    };
    this.filterProducts = [];
    this.view = new AppView();
  }

  startCards(): void {
    const filter: FilterInterfase<string | number>[] = localStore.getProducts();
    const sortProducts: ProductsInterfase[] = localStore.getSortProducts();
    if (filter.length && sortProducts.length) {
      this.view.drawCards(this.filterArray(sortProducts, filter[0]));
      this.products = sortProducts;
      this.filters = filter[0];
    } else {
      this.view.drawCards(this.filterArray(this.products, this.filters));
    }
  }

  addHeader(): void {
    this.view.drawHeader(localStore.getItems().length);
  }

  addModalWindow(): void {
    this.view.drawModalWindow();
  }

  addFooter(): void {
    this.view.drawFooter();
  }

  doSort(value: string): void {
    if (value === '1') {
      this.products.sort((a, b): number => (a.price > b.price ? 1 : -1));
    }
    if (value === '2') {
      this.products.sort((a, b): number => (a.price < b.price ? 1 : -1));
    }
    if (value === '3') {
      this.products.sort((a, b): number => (a.name > b.name ? 1 : -1));
    }
    if (value === '4') {
      this.products.sort((a, b): number => (a.name < b.name ? 1 : -1));
    }
    localStore.putProducts(this.filters);
    console.log(localStore.putProducts(this.filters));

    localStore.putSortProducts(this.products);
    this.view.drawCards(this.filterArray(this.products, this.filters));
  }

  private filterArray(array: ProductsInterfase[], filters: FilterInterfase<string | number>): ProductsInterfase[] {
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
    localStore.putProducts(this.filters);
    this.view.drawCards(this.filterArray(this.products, this.filters));
  }

  findPower(value: string, check: boolean): void {
    if (check) {
      this.filters.power.push(value);
    } else {
      this.filters.power.splice(this.filters.power.indexOf(value), 1);
    }
    localStore.putProducts(this.filters);
    this.view.drawCards(this.filterArray(this.products, this.filters));
  }

  findPopular(check: boolean): void {
    if (check) {
      this.filters.popular.push('yes');
    } else {
      this.filters.popular.splice(this.filters.popular.indexOf('yes'), 1);
    }
    localStore.putProducts(this.filters);
    this.view.drawCards(this.filterArray(this.products, this.filters));
  }

  findCompany(value: string, check: boolean): void {
    if (check) {
      this.filters.company.push(value);
    } else {
      this.filters.company.splice(this.filters.company.indexOf(value), 1);
    }
    localStore.putProducts(this.filters);
    this.view.drawCards(this.filterArray(this.products, this.filters));
  }

  findPrice(valueMin: string, valueMax: string): void {
    const priceArr: number[] = [
      120,
      140,
      160,
      180,
      200,
      220,
      240,
      260,
      280,
      300,
      320,
      340,
      360,
      380,
      400,
      420,
      440,
      460,
      480,
      500,
      520,
    ];
    let priceFilter: number[] = [];
    const range: number[] = priceArr.slice(priceArr.indexOf(+valueMin), priceArr.indexOf(+valueMax) + 1);
    priceFilter = range;
    this.filters.price = priceFilter;
    localStore.putProducts(this.filters);
    this.view.drawCards(this.filterArray(this.products, this.filters));
  }

  findTotalItem(valueMin: string, valueMax: string): void {
    const itemArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    let itemFilter: number[] = [];
    const range: number[] = itemArr.slice(itemArr.indexOf(+valueMin), itemArr.indexOf(+valueMax) + 1);
    itemFilter = range;
    this.filters.quantity = itemFilter;
    localStore.putProducts(this.filters);
    this.view.drawCards(this.filterArray(this.products, this.filters));
  }

  findText(value: string): void {
    const nameArr: string[] = [
      'ambiente',
      'artemide',
      'artpole',
      'bejorama',
      'bogates',
      'bohemia',
      'brilliant',
      'chiaro',
      'covali',
      'crystal',
      'dekolight',
      'demarkt',
      'denkirs',
      'diodarte',
      'fametto',
      'fumagalli',
      'italline',
      'lightstar',
      'luminex',
      'seletti',
      'velante',
    ];
    const searchName: string[] = nameArr.filter((el) => {
      if (el.includes(value.toLowerCase())) {
        return el;
      }
    });
    this.filters.name = searchName;
    if (searchName.length) {
      this.view.drawCards(this.filterArray(this.products, this.filters));
    } else {
      this.view.drawCards(this.filterArray(this.filterProducts, this.filters));
      this.filters.name.push(value);
    }
    localStore.putProducts(this.filters);
  }
}

export default AppModel;
