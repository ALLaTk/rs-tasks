import './filter.scss';
import Control from '../../Control';

class Filter extends Control {
  parent: HTMLElement;

  buttonCompany: HTMLElement;

  buttonPower: HTMLElement;

  buttonColor: HTMLElement;

  buttonPopular: HTMLElement;

  constructor(parent: HTMLElement) {
    super(parent, 'div', 'filter');
    this.parent = parent;
    this.buttonCompany = document.createElement('div');
    this.buttonPower = document.createElement('div');
    this.buttonColor = document.createElement('div');
    this.buttonPopular = document.createElement('div');
  }

  changeCompany(): void {
    this.buttonCompany.className = 'company';
    this.buttonCompany.innerHTML = `<p class="company-title">Company</p>`;
    const company: string[] = ['Arte Lamp', 'Arte Luce', 'Divinare', 'Maytoni'];
    company.forEach((elem: string): void => {
      const button: HTMLButtonElement = document.createElement('button');
      button.className = `company-button ${elem}`;
      button.innerHTML = `${elem}`;
      button.onclick = (): void => {
        button.classList.toggle('active');
      };
      this.buttonCompany.append(button);
    });

    this.element.append(this.buttonCompany);
    this.parent.lastElementChild?.lastElementChild?.append(this.element);
  }

  changePower(): void {
    this.buttonPower.className = 'power';
    this.buttonPower.innerHTML = `<p class="power-title">Power</p>`;
    const company: string[] = ['85WT', '150WT', '225WT'];
    company.forEach((elem: string): void => {
      const button: HTMLButtonElement = document.createElement('button');
      button.className = `power-button ${elem}`;
      button.innerHTML = `${elem}`;
      button.onclick = () => {
        button.classList.toggle('active');
      };
      this.buttonPower.append(button);
    });

    this.element.append(this.buttonPower);
    this.parent.lastElementChild?.lastElementChild?.append(this.element);
  }

  changeColor(): void {
    this.buttonColor.className = 'color';
    this.buttonColor.innerHTML = `<p class="color-title">Color</p>`;
    const company: string[] = ['white', 'gold', 'silver'];
    company.forEach((elem: string): void => {
      const button: HTMLButtonElement = document.createElement('button');
      button.className = `color-button ${elem}`;
      button.onclick = (): void => {
        button.classList.toggle('active');
      };
      this.buttonColor.append(button);
    });

    this.element.append(this.buttonColor);
    this.parent.lastElementChild?.lastElementChild?.append(this.element);
  }

  changePopular(): void {
    this.buttonPower.className = 'popular';
    this.buttonPower.innerHTML = `<p class="popular-title">Popular</p>`;
    const button: HTMLButtonElement = document.createElement('button');
    button.className = `popular-button`;
    button.onclick = (): void => {
      button.classList.toggle('active');
    };
    this.buttonPower.append(button);
    this.element.append(this.buttonPower);
    this.parent.lastElementChild?.lastElementChild?.append(this.element);
  }
}

const filter: Filter = new Filter(document.body);
export default filter;
