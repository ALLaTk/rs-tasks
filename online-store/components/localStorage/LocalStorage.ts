import { ProductsInterfase, FilterInterfase } from '../appTypes/Interfase';
class LocalStorage {
  keyItems: string;

  keyProducts: string;

  keyFilter: string;

  keyText: string;

  keySliderPrice: string;

  keySliderItems: string;

  keySortProducts: string;

  keyFilterSort: string;

  constructor() {
    this.keyItems = 'items';
    this.keyProducts = 'products';
    this.keySortProducts = 'sortProducts';
    this.keyFilter = 'filter';
    this.keyFilterSort = 'filterSort';
    this.keyText = 'text';
    this.keySliderPrice = 'sliderPrice';
    this.keySliderItems = 'sliderItems';
  }

  getItems(): string[] {
    const itemLocalStorage: string | null = localStorage.getItem(this.keyItems);
    if (itemLocalStorage) {
      return JSON.parse(itemLocalStorage);
    }
    return [];
  }

  putItems(id: string): { pushProduct: boolean; products: string[] } {
    let products: string[] = this.getItems();
    let pushProduct = false;
    const index: number = products.indexOf(id);
    if (id === 'none') {
      pushProduct = false;
      products = [];
    }
    if (index === -1 && id !== 'none') {
      products.push(id);
      pushProduct = true;
    } else {
      products.splice(index, 1);
    }

    localStorage.setItem(this.keyItems, JSON.stringify(products));
    return { pushProduct, products };
  }

  getSortProducts(): ProductsInterfase[] {
    const itemLocalStorage: string | null = localStorage.getItem(this.keySortProducts);
    if (itemLocalStorage) {
      return JSON.parse(itemLocalStorage);
    }
    return [];
  }

  putSortProducts(value: ProductsInterfase[]): ProductsInterfase[] {
    const sortProducts: ProductsInterfase[] = this.getSortProducts();
    sortProducts.splice(0, 21);
    value.forEach((el) => {
      sortProducts.push(el);
    });
    localStorage.setItem(this.keySortProducts, JSON.stringify(sortProducts));
    return sortProducts;
  }

  getProducts(): FilterInterfase<string | number>[] {
    const itemLocalStorage: string | null = localStorage.getItem(this.keyProducts);
    if (itemLocalStorage) {
      return JSON.parse(itemLocalStorage);
    }
    return [];
  }

  putProducts(
    value: FilterInterfase<string | number>
  ): {
    [key: string]: FilterInterfase<string | number>[];
  } {
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

  getFilterSort(): string {
    const itemLocalStorage: string | null = localStorage.getItem(this.keyFilterSort);
    if (itemLocalStorage) {
      return JSON.parse(itemLocalStorage);
    }
    return '';
  }

  putFilterSort(value: string): string {
    let filterSort: string = this.getFilterSort();
    filterSort = value;
    localStorage.setItem(this.keyFilterSort, JSON.stringify(filterSort));
    return filterSort;
  }

  getText(): string {
    const itemLocalStorage: string | null = localStorage.getItem(this.keyText);
    if (itemLocalStorage) {
      return JSON.parse(itemLocalStorage);
    }
    return '';
  }

  putText(value: string): string {
    let text: string = this.getText();
    text = value;
    localStorage.setItem(this.keyText, JSON.stringify(text));
    return text;
  }

  getSliderPrice(): string[] {
    const itemLocalStorage: string | null = localStorage.getItem(this.keySliderPrice);
    if (itemLocalStorage) {
      return JSON.parse(itemLocalStorage);
    }
    return [];
  }

  putSliderPrice(value0: string, value1: string): string[] {
    const text: string[] = this.getSliderPrice();
    text.splice(0, 2);
    text.push(value0);
    text.push(value1);
    localStorage.setItem(this.keySliderPrice, JSON.stringify(text));
    return text;
  }

  getSliderItems(): string[] {
    const itemLocalStorage: string | null = localStorage.getItem(this.keySliderItems);
    if (itemLocalStorage) {
      return JSON.parse(itemLocalStorage);
    }
    return [];
  }

  putSliderItems(value0: string, value1: string): string[] {
    const text: string[] = this.getSliderItems();
    text.splice(0, 2);
    text.push(value0);
    text.push(value1);
    localStorage.setItem(this.keySliderItems, JSON.stringify(text));
    return text;
  }
}

const localStore = new LocalStorage();

export default localStore;
