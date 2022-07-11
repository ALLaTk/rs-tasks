import './cards.scss';
import Control from '../../Control';
import products from '../../../../server/products.json';

class Cards extends Control {
  parent: HTMLElement;

  constructor(parent: HTMLElement) {
    super(parent, 'div', 'cards');
    this.parent = parent;
  }

  render(): void {
    const content: HTMLDivElement = document.createElement('div');
    content.className = 'cards__content';
    content.innerHTML = products
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

    const childNode: HTMLCollection = content.children;

    for (const child of childNode) {
      const button: HTMLButtonElement = document.createElement('button');
      button.className = 'button-card';
      button.innerHTML = 'PICK A LAMP';
      button.onclick = () => {
        button.classList.toggle('active');
        console.log(child.id);
      };
      child.lastElementChild?.append(button);
    }

    this.element.append(content);
    this.mainContent.append(this.element);
    this.parent.append(this.mainContent);
  }
}

const cards: Cards = new Cards(document.body);

export default cards;
