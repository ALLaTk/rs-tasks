import './header.scss';
class Header {
  render(data: number): void {
    const header = <HTMLElement>document.querySelector('header');
    const html = `<div class="header__content">
                <div class="header__top">
                  <h1 class="main-title">ONLINE SHOP</h1>
                  <div class ="cart">${data}</div>
                </div>  
               </div>`;
    header.innerHTML = html;
  }
}

export default Header;
