import products from '../../server/products.json';
import AppModel from '../model/AppModel';
import ProductsInterfase from '../appTypes/Interfase';

class App extends AppModel {
  model: AppModel;

  products: ProductsInterfase[];

  constructor() {
    super(products);
    this.products = products;
    this.model = new AppModel(products);
  }

  start(): void {
    this.model.addheader();
    this.view.showSort();
    this.view.showFilter();
    this.model.doSort('1');
    this.renderSort();
    this.renderColor();
  }

  renderSort(): void {
    const select = <HTMLSelectElement>document.querySelector('.select');
    select.onchange = () => {
      this.model.doSort(select.value);
    };
  }
  
  renderColor() {
    const select = <HTMLInputElement[]>[...document.querySelectorAll('.color .color__content input')];
    select.forEach((elem) => {        
      elem.onchange= () => {
        this.model.findColor(elem.name, elem.checked)
      }          
    })   
  }
}

export default App;
