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
                  <img class="image" src=${el.image} alt="lamp">
                  <ul>
                    <li>${el.company}</li>
                    <li>${el.power}</li>
                    <li>${el.color}</li>
                    <li>${el.quantity}</li>
                    <li>${el.price}</li>
                    <li>${el.popular}</li>
                  </ul>
                  <button>Add to Cart</button>
                </div>
              </div>`;
      })
      .join('');
    this.element.appendChild(content);
    (<HTMLElement>document.body.lastChild)?.appendChild(this.element);
    this.parent.append(<HTMLElement>document.body.lastChild);
  }
}

const cards: Cards = new Cards(document.body);

export default cards;
