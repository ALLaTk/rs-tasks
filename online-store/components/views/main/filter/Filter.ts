import './filter.scss';
class Filter {
  inputCompany: HTMLFormElement;

  inputPower: HTMLFormElement;

  inputColor: HTMLFormElement;

  inputPopular: HTMLFormElement;

  constructor() {
    this.inputCompany = document.createElement('form');
    this.inputPower = document.createElement('form');
    this.inputColor = document.createElement('form');
    this.inputPopular = document.createElement('form');
  }

  addCompany(): void {
    const render = <HTMLDivElement>document.querySelector('.render');
    this.inputCompany.className = 'company';
    this.inputCompany.innerHTML = `<p class="company-title">Company</p>`;
    const company: string[] = ['Arte Lamp', 'Arte Luce', 'Divinare', 'Maytoni'];
    company.forEach((elem: string): void => {
      const companyBlock: HTMLDivElement = document.createElement('div');
      companyBlock.className = 'company__content';
      const text: HTMLElement = document.createElement('p');
      text.className = 'company-name';
      text.innerHTML = elem;
      const input: HTMLInputElement = document.createElement('input');
      input.className = `company-button ${elem}`;
      input.type = 'checkbox';
      input.name = elem;
      companyBlock.append(input);
      companyBlock.append(text);
      this.inputCompany.append(companyBlock);
    });

    render.append(this.inputCompany);
  }

  addPower(): void {
    const render = <HTMLDivElement>document.querySelector('.render');
    this.inputPower.className = 'power';
    this.inputPower.innerHTML = `<p class="power-title">Power</p>`;
    const company: string[] = ['85WT', '150WT', '225WT'];
    company.forEach((elem: string): void => {
      const powerBlock: HTMLDivElement = document.createElement('div');
      powerBlock.className = 'power__content';
      const text: HTMLElement = document.createElement('p');
      text.className = 'power-name';
      text.innerHTML = elem;
      const input: HTMLInputElement = document.createElement('input');
      input.className = `power-button ${elem}`;
      input.type = 'checkbox';
      input.name = elem;
      powerBlock.append(input);
      powerBlock.append(text);
      this.inputPower.append(powerBlock);
    });

    render.append(this.inputPower);
  }

  addColor(): void {
    const render = <HTMLDivElement>document.querySelector('.render');
    this.inputColor.className = 'color';
    this.inputColor.innerHTML = `<p class="color-title">Color</p>`;
    const company: string[] = ['white', 'gold', 'silver'];
    company.forEach((elem: string): void => {
      const colorBlock: HTMLDivElement = document.createElement('div');
      colorBlock.className = 'color__content';
      const text: HTMLElement = document.createElement('p');
      text.className = 'color-name';
      text.innerHTML = elem;
      const input: HTMLInputElement = document.createElement('input');
      input.className = `color-button ${elem}`;
      input.type = 'checkbox';
      input.name = elem;
      colorBlock.append(input);
      colorBlock.append(text);
      this.inputColor.append(colorBlock);
    });

    render.append(this.inputColor);
  }

  addPopular(): void {
    const render = <HTMLDivElement>document.querySelector('.render');
    this.inputPopular.className = 'popular';
    this.inputPopular.innerHTML = `<p class="popular-title">Popular</p>`;
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'popular';
    input.className = `popular-button`;
    this.inputPopular.append(input);
    render.append(this.inputPopular);
  }
}

export default Filter;
