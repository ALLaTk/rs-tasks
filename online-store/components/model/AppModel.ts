import ProductsInterfase from '../appTypes/Interfase';
import AppView from '../views/AppView';

class AppModel {
  products: ProductsInterfase[];
  
  filterProducts: ProductsInterfase[];
  filterTerms: string[]
  view: AppView;

  constructor(products: ProductsInterfase[]) {
    this.products = products;
    this.filterProducts = [];
    this.filterTerms = []
    this.view = new AppView();
  }

  sortProducts(): ProductsInterfase[] {
    return this.filterProducts;
  }

  addheader() {
    this.view.drawHeader();
  }

  startCards() {
    this.view.drawCards(this.products);
  }


  doSort(value: string) {
    let sortArr: ProductsInterfase[] = [];
    this.filterProducts.length ? sortArr = this.filterProducts : sortArr = this.products
    if (value === '1') {
      sortArr.sort((a, b) => (a.price > b.price ? 1 : -1));
      this.view.drawCards(sortArr);
    }
    if (value === '2') {
      sortArr.sort((a, b) => (a.price < b.price ? 1 : -1));
      this.view.drawCards(sortArr);
    }
    if (value === '3') {
      sortArr.sort((a, b) => (a.name > b.name ? 1 : -1));
      this.view.drawCards(sortArr);
    }
    if (value === '4') {
      sortArr.sort((a, b) => (a.name < b.name ? 1 : -1));
      this.view.drawCards(sortArr);
    }
  }

  findColor(value: string, check: boolean) {

    this.filterProducts = []
    if(check) {
      this.products.filter((el) => { 
        if(el.color === value) { 
          if(!this.filterProducts.includes(el))
          this.filterProducts.push(el)
        }
        this.filterTerms.filter((elem)=>{
           if(Object.values(el).includes(elem)) {
             this.filterProducts.push(el)
           }
        })
      })
      
     this.filterTerms.push(value) 
     this.view.drawCards(this.filterProducts)   
    }
    if(!check) {
      if (this.filterTerms.length) {
      this.filterTerms.splice(this.filterTerms.indexOf(value), 1)
      this.products.filter((el) => {     
       this.filterTerms.filter((elem)=>{
           if(Object.values(el).includes(elem)) {         
             this.filterProducts.push(el)
           }
        })
      })
      this.view.drawCards(this.filterProducts) 
    } else this.view.drawCards(this.products)
      
    }
  }

}

export default AppModel;
