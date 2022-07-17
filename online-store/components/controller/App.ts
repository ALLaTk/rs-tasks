import AppModel from '../model/AppModel';
import localStore from '../localStorage/LocalStorage';

class App extends AppModel {
  model: AppModel;

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
    this.resetFilters();
    this.resetSettings();
  }

  renderSort(): void {
    const select = <HTMLSelectElement>document.querySelector('.select');
    const sortStore: string = localStore.getFilterSort();
    select.onchange = () => {
      localStore.putFilterSort(select.value);
      this.model.doSort(select.value);
    };
    if (sortStore) {
      select.value = sortStore;
    } else select.value = '1';
  }

  renderSearch() {
    const text = <HTMLInputElement>document.querySelector('.search-input');
    const textStore: string = localStore.getText();
    text.focus();
    text.oninput = () => {
      localStore.putText(text.value);
      this.model.findText(text.value);
    };
    text.value = textStore;
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
    const sliderPriceStore: string[] = localStore.getSliderPrice();
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
        localStore.putSliderPrice(sliders[0].value, sliders[1].value);
        this.model.findPrice(sliders[0].value, sliders[1].value);
      };
    });

    if (sliderPriceStore.length) {
      sliders[0].value = sliderPriceStore[0];
      sliders[1].value = sliderPriceStore[1];
      min.innerHTML = sliders[0].value;
      max.innerHTML = sliders[1].value;
    }
    sliders.forEach((slider) => {
      slider.oninput = () => {
        min.innerHTML = `${sliders[0].value}`;
        max.innerHTML = `${sliders[1].value}`;
      };
    });
  }

  renderSliderItem() {
    const sliderItemsStore: string[] = localStore.getSliderItems();
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
        localStore.putSliderItems(sliders[0].value, sliders[1].value);
        this.model.findTotalItem(sliders[0].value, sliders[1].value);
      };
    });
    if (sliderItemsStore.length) {
      sliders[0].value = sliderItemsStore[0];
      sliders[1].value = sliderItemsStore[1];
      min.innerHTML = sliders[0].value;
      max.innerHTML = sliders[1].value;
    }
    sliders.forEach((slider) => {
      slider.oninput = () => {
        min.innerHTML = `${sliders[0].value}`;
        max.innerHTML = `${sliders[1].value}`;
      };
    });
  }

  private resetFiltersAndSettings() {
    const text = <HTMLInputElement>document.querySelector('.search-input');
    const popular = <HTMLInputElement>document.querySelector('.popular input');
    const company = <HTMLInputElement[]>[...document.querySelectorAll('.company input')];
    const power = <HTMLInputElement[]>[...document.querySelectorAll('.power input')];
    const color = <HTMLInputElement[]>[...document.querySelectorAll('.color input')];
    const sliderItem = <HTMLInputElement[]>[...document.querySelectorAll('.container-item input[type="range"]')];
    const minItem = <HTMLElement>document.querySelector('.min-item');
    const maxItem = <HTMLElement>document.querySelector('.max-item');
    const sliderPrice = <HTMLInputElement[]>[...document.querySelectorAll('.container-price input[type="range"]')];
    const minPrice = <HTMLElement>document.querySelector('.min-price');
    const maxPrice = <HTMLElement>document.querySelector('.max-price');
    popular.checked = false;
    this.model.findPopular(popular.checked);
    localStore.putFilter(popular.name, popular.checked);
    text.value = '';
    this.model.findText(text.value);
    localStore.putText(text.value);
    company.forEach((elem: HTMLInputElement): void => {
      localStore.putFilter(elem.name, false);
      this.model.findCompany(elem.name, false);
      elem.checked = false;
    });
    power.forEach((elem: HTMLInputElement): void => {
      localStore.putFilter(elem.name, false);
      this.model.findPower(elem.name, false);
      elem.checked = false;
    });
    color.forEach((elem: HTMLInputElement): void => {
      localStore.putFilter(elem.name, false);
      this.model.findColor(elem.name, false);
      elem.checked = false;
    });
    localStore.putSliderPrice('120', '520');
    this.model.findPrice('120', '520');
    sliderPrice[0].value = '120';
    sliderPrice[1].value = '520';
    minPrice.innerHTML = sliderPrice[0].value;
    maxPrice.innerHTML = sliderPrice[1].value;
    localStore.putSliderItems('1', '15');
    this.model.findTotalItem('1', '15');
    sliderItem[0].value = '1';
    sliderItem[1].value = '15';
    minItem.innerHTML = sliderItem[0].value;
    maxItem.innerHTML = sliderItem[1].value;
  }

  resetFilters(): void {
    const resetFilters = <HTMLInputElement>document.querySelector('.reset-filters input');
    resetFilters.onclick = () => {
      this.resetFiltersAndSettings();
    };
  }

  resetSettings(): void {
    const resetSettings = <HTMLInputElement>document.querySelector('.reset-setting input');
    const buttons = <HTMLButtonElement[]>[...document.querySelectorAll('.button-card')];
    const select = <HTMLSelectElement>document.querySelector('.select');
    resetSettings.onclick = () => {
      this.resetFiltersAndSettings();
      this.view.drawHeader(0);
      localStore.putItems('none');
      select.value = '1';
      localStore.putFilterSort(select.value);
      this.model.doSort(select.value);
      buttons.forEach((el) => {
        el.classList.remove('active');
      });
      location.reload();
    };
  }
}

export default App;
