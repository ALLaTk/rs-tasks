import './header.scss';
import Control from '../Control';

class Header extends Control {
  constructor(parent: HTMLElement) {
    super(parent, 'header', 'header');
  }

  render(data: number): void {
    const html = `
                <div class="header__top">
                  <img class="logo__img" src="./assets/png/logo.png">
                  <nav class="menu">
                    <ul class="menu__list">
                      <li class="menu__list-item">HOME</li>
                      <li class="menu__list-item">ABOUT</li>
                      <li class="menu__list-item active">SHOP</li>
                      <li class="menu__list-item">EVENT</li>
                      <li class="menu__list-item">CONTACTS</li>
                    </ul>
                  </nav>
                  <div class ="cart">${data}</div>
                </div>  
                <img class="header__img" src="./assets/jpg/light.jpg">`;
    this.element.innerHTML = html;
  }
}

const header: Header = new Header(document.body);

export default header;
