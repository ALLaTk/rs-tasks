class LocalStorage {
  key: string;

  constructor() {
    this.key = 'items';
  }

  getProducts(): [] {
    const itemLocalStorage = localStorage.getItem(this.key);
    if (itemLocalStorage) {
      return JSON.parse(itemLocalStorage);
    }
    return [];
  }

  putProducts(id: string) {
    const products: string[] = this.getProducts();
    let pushProduct = false;
    const index = products.indexOf(id);

    if (index === -1) {
      products.push(id);
      pushProduct = true;
    } else {
      products.splice(index, 1);
    }

    localStorage.setItem(this.key, JSON.stringify(products));

    return { pushProduct, products };
  }
}

const localStore = new LocalStorage();

export default localStore;
