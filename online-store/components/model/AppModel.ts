import ProductsInterfase from '../appTypes/Interfase';
import AppView from '../views/AppView';

class AppModel {
  products: ProductsInterfase[];

  filterProducts: ProductsInterfase[];

  filterColor: string[];

  filterPower: string[];

  view: AppView;

  constructor(products: ProductsInterfase[]) {
    this.products = products;
    this.filterProducts = [];
    this.filterColor = [];
    this.filterPower = [];
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

  findColor(value: string, check: boolean): void {
    let valueArr: string[] = [];
    valueArr = valueArr.concat(this.filterPower);
    let filterArr: ProductsInterfase[] = [];
    if (valueArr.length) {
      this.products.filter((el) => {
        valueArr.filter((elem) => {
          if (Object.values(el).includes(elem)) {
            filterArr.push(el);
          }
        });
      });
    } else filterArr = this.products;

    this.filterProducts = [];
    if (check) {
      filterArr.filter((el) => {
        if (el.color === value) {
          if (!this.filterProducts.includes(el)) this.filterProducts.push(el);
        }
        this.filterColor.filter((elem) => {
          if (Object.values(el).includes(elem)) {
            this.filterProducts.push(el);
          }
        });
      });

      this.filterColor.push(value);
      this.view.drawCards(this.filterProducts);
    }
    if (!check) {
      this.filterColor.splice(this.filterColor.indexOf(value), 1);
      if (this.filterColor.length) {
        filterArr.filter((el) => {
          this.filterColor.filter((elem) => {
            if (Object.values(el).includes(elem)) {
              this.filterProducts.push(el);
            }
          });
        });
        this.view.drawCards(this.filterProducts);
      } else this.view.drawCards(filterArr);
    }
  }

  findPower(value: string, check: boolean): void {
    let valueArr: string[] = [];
    valueArr = valueArr.concat(this.filterColor);
    let filterArr: ProductsInterfase[] = [];
    if (valueArr.length) {
      this.products.filter((el) => {
        valueArr.filter((elem) => {
          if (Object.values(el).includes(elem)) {
            filterArr.push(el);
          }
        });
      });
    } else filterArr = this.products;

    this.filterProducts = [];
    if (check) {
      filterArr.filter((el) => {
        if (el.power === value) {
          if (!this.filterProducts.includes(el)) this.filterProducts.push(el);
        }
        this.filterPower.filter((elem) => {
          if (Object.values(el).includes(elem)) {
            this.filterProducts.push(el);
          }
        });
      });

      this.filterPower.push(value);
      this.view.drawCards(this.filterProducts);
      console.log(this.filterProducts);
    }
    if (!check) {
      this.filterPower.splice(this.filterPower.indexOf(value), 1);
      if (this.filterPower.length) {
        filterArr.filter((el) => {
          this.filterPower.filter((elem) => {
            if (Object.values(el).includes(elem)) {
              this.filterProducts.push(el);
            }
          });
        });
        this.view.drawCards(this.filterProducts);
      } else this.view.drawCards(filterArr);
    }
  }
}

export default AppModel;
