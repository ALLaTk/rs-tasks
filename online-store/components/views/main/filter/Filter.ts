import './filter.scss';
class Filter {

  buttonCompany: HTMLDivElement;

  buttonPower: HTMLDivElement;

  buttonColor: HTMLDivElement;

  buttonPopular: HTMLDivElement;

  constructor() {;
    this.buttonCompany = document.createElement('div');
    this.buttonPower = document.createElement('div');
    this.buttonColor = document.createElement('div');
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

    render.append(this.buttonPower);
  }

  addColor(): void {
    const render = <HTMLDivElement>document.querySelector('.render');
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

    render.append(this.buttonColor);
  }

  addPopular(): void {
    const render = <HTMLDivElement>document.querySelector('.render');
    this.buttonPower.className = 'popular';
    this.buttonPower.innerHTML = `<p class="popular-title">Popular</p>`;
    const button: HTMLButtonElement = document.createElement('button');
    button.className = `popular-button`;
    button.onclick = (): void => {
      button.classList.toggle('active');
    };
    this.buttonPower.append(button);
    render.append(this.buttonPower);
  }
}

export default Filter;
