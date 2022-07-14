import './filter.scss';
class Filter {
  buttonCompany: HTMLDivElement;

  inputPower: HTMLFormElement;

  inputColor: HTMLFormElement;

  buttonPopular: HTMLDivElement;

  constructor() {
    this.buttonCompany = document.createElement('div');
    this.inputPower = document.createElement('form');
    this.inputColor = document.createElement('form');
    this.buttonPopular = document.createElement('div');
  }

  addCompany(): void {
    const render = <HTMLDivElement>document.querySelector('.render');
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

    render.append(this.buttonCompany);
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
    this.buttonPopular.className = 'popular';
    this.buttonPopular.innerHTML = `<p class="popular-title">Popular</p>`;
    const button: HTMLButtonElement = document.createElement('button');
    button.className = `popular-button`;
    button.onclick = (): void => {
      button.classList.toggle('active');
    };
    this.buttonPopular.append(button);
    render.append(this.buttonPopular);
  }
}

export default Filter;
