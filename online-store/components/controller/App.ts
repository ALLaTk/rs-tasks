import products from '../../server/products.json';
import AppModel from '../model/AppModel';
import { ProductsInterfase } from '../appTypes/Interfase';

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
    this.view.showSlider();
    this.model.doSort('1');
    this.renderSort();
    this.renderColor();
    this.renderPower();
    this.renderPopular();
    this.renderCompany();
    this.renderSliderPrice();
  }

  renderSort(): void {
    const select = <HTMLSelectElement>document.querySelector('.select');
    select.onchange = () => {
      this.model.doSort(select.value);
    };
  }

  renderColor(): void {
    const select = <HTMLInputElement[]>[...document.querySelectorAll('.color input')];
    select.forEach((elem: HTMLInputElement): void => {
      elem.onchange = (): void => {
        this.model.findColor(elem.name, elem.checked);
      };
    });
  }

  renderPower(): void {
    const select = <HTMLInputElement[]>[...document.querySelectorAll('.power input')];
    select.forEach((elem: HTMLInputElement): void => {
      elem.onchange = (): void => {
        this.model.findPower(elem.name, elem.checked);
      };
    });
  }

  renderPopular(): void {
    const select = <HTMLInputElement>document.querySelector('.popular input');
    select.onchange = (): void => {
      this.model.findPopular(select.checked);
    };
  }

  renderCompany(): void {
    const select = <HTMLInputElement[]>[...document.querySelectorAll('.company input')];
    select.forEach((elem: HTMLInputElement): void => {
      elem.onchange = (): void => {
        this.model.findCompany(elem.name, elem.checked);
      };
    });
  }

  renderSliderPrice() {
    const sliders = <HTMLInputElement[]>[...document.querySelectorAll('.container input[type="range"]')];

    const min = <HTMLElement>document.querySelector('.min');
    const max = <HTMLElement>document.querySelector('.max');

    sliders[0].oninput = () => {
      if (+sliders[0].value > +sliders[1].value) {
        sliders[1].value = sliders[0].value;
      }
    };

    sliders[1].oninput = () => {
      if (+sliders[1].value < +sliders[0].value) {
        sliders[0].value = sliders[1].value;
      }
    };

    sliders.forEach((slider) => {
      slider.onmouseup = () => {
        this.model.findPrice(sliders[0].value, sliders[1].value);
      };
    });
    sliders.forEach((slider) => {
      slider.oninput = () => {
        min.innerHTML = `${sliders[0].value}`;
        max.innerHTML = `${sliders[1].value}`;
      };
    });
  }
}

export default App;
