import { ProductsInterfase, FilterInterfase } from '../appTypes/Interfase';
class LocalStorage {
  keyItems: string;

  keyProducts: string;

  keyFilter: string;

  constructor() {
    this.keyItems = 'items';
    this.keyProducts = 'products';
    this.keyFilter = 'filter';
  }

  getItems(): string[] {
    const itemLocalStorage: string | null = localStorage.getItem(this.keyItems);
    if (itemLocalStorage) {
      return JSON.parse(itemLocalStorage);
    }
    return [];
  }

  putItems(id: string) {
    const products: string[] = this.getItems();
    let pushProduct = false;
    const index: number = products.indexOf(id);

    if (index === -1) {
      products.push(id);
      pushProduct = true;
    } else {
      products.splice(index, 1);
    }

    localStorage.setItem(this.keyItems, JSON.stringify(products));
    return { pushProduct, products };
  }

  getProducts(): FilterInterfase<string | number>[] {
    const itemLocalStorage = localStorage.getItem(this.keyProducts);
    if (itemLocalStorage) {
      return JSON.parse(itemLocalStorage);
    }
    return [];
  }

  putProducts(value: FilterInterfase<string | number>) {
    const products: FilterInterfase<string | number>[] = this.getProducts();
    products.splice(0, 1);
    products.push(value);
    localStorage.setItem(this.keyProducts, JSON.stringify(products));
    return { products };
  }

  getFilter(): { [key: string]: boolean } {
    const itemLocalStorage: string | null = localStorage.getItem(this.keyFilter);
    if (itemLocalStorage) {
      return JSON.parse(itemLocalStorage);
    }
    return {};
  }

  putFilter(key: string, value: boolean): { [key: string]: boolean } {
    const company: { [key: string]: boolean } = this.getFilter();
    company[key] = value;
    localStorage.setItem(this.keyFilter, JSON.stringify(company));
    return company;
  }
}

const localStore = new LocalStorage();

export default localStore;
