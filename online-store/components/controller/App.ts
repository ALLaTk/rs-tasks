import products from '../../server/products.json';
import AppModel from '../model/AppModel';
import localStore from '../localStorage/LocalStorage';

class App extends AppModel {
  model: AppModel;

  // products: ProductsInterfase[];

  constructor() {
    super();
    this.model = new AppModel();
  }

  start(): void {
    this.model.addHeader();
    this.view.showSort();
    this.view.showFilter();
    this.view.showSlider();
    this.view.showResets();
    this.addFooter();
    this.model.startCards();
    this.renderSort();
    this.renderSearch();
    this.renderColor();
    this.renderPower();
    this.renderPopular();
    this.renderCompany();
    this.renderSliderPrice();
    this.renderSliderItem();
  }

  renderSort(): void {
    const select = <HTMLSelectElement>document.querySelector('.select');
    select.onchange = () => {
      this.model.doSort(select.value);
    };
  }

  renderSearch() {
    const text = <HTMLInputElement>document.querySelector('.search-input');
    const textStore: string  = localStore.getText();
    text.focus();
    text.oninput = () => {
      localStore.putText(text.value);
      this.model.findText(text.value);
    };
    text.value = textStore
  }

  renderColor(): void {
    const filterStore: { [key: string]: boolean } = localStore.getFilter();
    const select = <HTMLInputElement[]>[...document.querySelectorAll('.color input')];
    select.forEach((elem: HTMLInputElement): void => {
      elem.onchange = (): void => {
        localStore.putFilter(elem.name, elem.checked);
        this.model.findColor(elem.name, elem.checked);
      };
    });
    select.forEach((elem: HTMLInputElement): void => {
      for (const item in filterStore) {
        if (elem.name === item) {
          elem.checked = filterStore[item];
        }
      }
    });
  }

  renderPower(): void {
    const filterStore: { [key: string]: boolean } = localStore.getFilter();
    const select = <HTMLInputElement[]>[...document.querySelectorAll('.power input')];
    select.forEach((elem: HTMLInputElement): void => {
      elem.onchange = (): void => {
        localStore.putFilter(elem.name, elem.checked);
        this.model.findPower(elem.name, elem.checked);
      };
    });
    select.forEach((elem: HTMLInputElement): void => {
      for (const item in filterStore) {
        if (elem.name === item) {
          elem.checked = filterStore[item];
        }
      }
    });
  }

  renderPopular(): void {
    const filterStore: { [key: string]: boolean } = localStore.getFilter();
    const select = <HTMLInputElement>document.querySelector('.popular input');
    select.onchange = (): void => {
      localStore.putFilter(select.name, select.checked);
      this.model.findPopular(select.checked);
    };
    for (const item in filterStore) {
      if (select.name === item) {
        select.checked = filterStore[item];
      }
    }
  }

  renderCompany(): void {
    const filterStore: { [key: string]: boolean } = localStore.getFilter();
    const select = <HTMLInputElement[]>[...document.querySelectorAll('.company input')];
    select.forEach((elem: HTMLInputElement): void => {
      elem.onchange = (): void => {
        localStore.putFilter(elem.name, elem.checked);
        this.model.findCompany(elem.name, elem.checked);
      };
    });
    select.forEach((elem: HTMLInputElement): void => {
      for (const item in filterStore) {
        if (elem.name === item) {
          elem.checked = filterStore[item];
        }
      }
    });
  }

  renderSliderPrice() {
    const sliders = <HTMLInputElement[]>[...document.querySelectorAll('.container-price input[type="range"]')];

    const min = <HTMLElement>document.querySelector('.min-price');
    const max = <HTMLElement>document.querySelector('.max-price');

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

  renderSliderItem() {
    const sliders = <HTMLInputElement[]>[...document.querySelectorAll('.container-item input[type="range"]')];

    const min = <HTMLElement>document.querySelector('.min-item');
    const max = <HTMLElement>document.querySelector('.max-item');

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
        this.model.findTotalItem(sliders[0].value, sliders[1].value);
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
