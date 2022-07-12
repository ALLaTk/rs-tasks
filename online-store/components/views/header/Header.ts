import './header.scss';
class Header {
  render(data: number): void {
    const header = <HTMLElement>document.querySelector('header');
    const html = `<div class="header__content">
                <div class="header__top">
                  <h1 class="main-title">ONLINE SHOP</h1>
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
                <img class="header__img" src="./assets/jpg/light.jpg">
               </div>`;
    header.innerHTML = html;
  }
}

export default Header;
