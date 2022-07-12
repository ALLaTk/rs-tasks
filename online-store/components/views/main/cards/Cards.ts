import './cards.scss';
import ProductsInterfase from '../../../appTypes/Interfase';

class Cards {
  products: ProductsInterfase[]
  content: HTMLDivElement
  constructor() {
    this.content = document.createElement('div');
    this.products = []
  }

  render(data: ProductsInterfase[]): void {
    const main = <HTMLElement>document.querySelector('main')
    this.content.className = 'cards';
    this.products = data
   
    this.content.innerHTML = this.products
      .map((el): string => {
        return `<div class="cards__inner">
                  <p class="name-item">${el.name}</p>
                  <div class="cards__content-item">
                    <img class="cards-image" src=${el.image} alt="lamp">
                    <ul class="list">
                    <li class="list-item">${el.company}</li>
                    <li class="list-item">${el.power}</li>
                    <li class="list-item">POPULAR: ${el.popular}</li>
                    <li class="list-item">ITEM: ${el.quantity}</li>
                    <li class="list-item">COLOR: ${el.color}</li>
                    <li class="list-item">$ ${el.price}</li>
                  </ul>
                </div>
              </div>`;
      })
      .join('');

    const childNode: HTMLCollection = this.content.children;

    for (const child of childNode) {
      const button: HTMLButtonElement = document.createElement('button');
      button.className = 'button-card';
      button.innerHTML = 'PICK A LAMP';
      button.onclick = (): void => {
        button.classList.toggle('active');
        console.log(child.id);
      };
      child.lastElementChild?.append(button);
    }
    main.append(this.content);
  }

  deleteCards(){
   return this.content.remove();
  }
}

export default Cards;
