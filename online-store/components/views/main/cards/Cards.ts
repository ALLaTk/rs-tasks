import './cards.scss';
import { ProductsInterfase } from '../../../appTypes/Interfase';
import localStore from '../../../localStorage/LocalStorage';
class Cards {
  products: ProductsInterfase[];

  content: HTMLDivElement;

  classNameActive: string;

  constructor() {
    this.content = document.createElement('div');
    this.products = [];
    this.classNameActive = 'active';
  }

  handlerLocalStorage(element: HTMLButtonElement, id: string) {
    const cart = <HTMLDivElement>document.querySelector('.cart');
    const { pushProduct, products } = localStore.putItems(id);
    if (pushProduct) {
      element.classList.add(this.classNameActive);
    } else {
      element.classList.remove(this.classNameActive);
    }
    cart.innerHTML = `${products.length}`;
  }

  renderCards(data: ProductsInterfase[]): void {
    const main = <HTMLElement>document.querySelector('main');
    this.content.className = 'cards';
    this.products = data;
    if (!data.length) {
      this.content.innerHTML = `<p class="name-notfound">Sorry, no matches were found</p>`;
    } else {
      this.content.innerHTML = this.products
        .map((el): string => {
          return `<div class="cards__inner" id="${el.id}">
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
    }
    const childNode: HTMLCollection = this.content.children;
    const itemStore: string[] = localStore.getItems();

    for (const child of childNode) {
      const button: HTMLButtonElement = document.createElement('button');
      let activeClass = '';

      if (itemStore.includes(child.id)) {
        activeClass = 'active';
      }

      button.className = `button-card ${activeClass}`;
      button.innerHTML = 'PICK A LAMP';
      button.onclick = (): void => {
        button.classList.toggle('active');
        this.handlerLocalStorage(button, child.id);
      };
      child.lastElementChild?.append(button);
    }
    main.append(this.content);
  }
}

export default Cards;
