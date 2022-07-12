import ProductsInterfase from '../appTypes/Interfase';
import AppView from '../views/AppView';

class AppModel {
  products: ProductsInterfase[];
  newProducts: ProductsInterfase[];
  view: AppView
  constructor(products: ProductsInterfase[]) {
     this.products = products
     this.newProducts = []
     this.view = new AppView()
  }

  sortProducts (): ProductsInterfase[] {
    return this.newProducts; 
  }

  addheader () {
    this.view.drawHeader()
  }


  doSort(value: string) {
    if(value === '1') {
      this.products.sort((a, b) => a.price > b.price ? 1 : -1);
      this.newProducts = this.products
      this.view.drawCards(this.newProducts)
    }
    if(value === '2') {
     this.products.sort((a, b) => a.price < b.price ? 1 : -1);
     this.newProducts = this.products
     this.view.drawCards(this.newProducts)
    }
    if(value === '3') {
      this.products.sort((a, b) => a.name > b.name ? 1 : -1);
      this.newProducts = this.products
      this.view.drawCards(this.newProducts)
    }
    if(value === '4') {
     this.products.sort((a, b) => a.name < b.name ? 1 : -1);
     this.newProducts = this.products
     this.view.drawCards(this.newProducts)
    }
  }
}

export default AppModel;