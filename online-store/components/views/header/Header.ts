import './header.scss';
class Header {
  renderHeader(item: number): void {
    const header = <HTMLElement>document.querySelector('header');
    const html = `<div class="header__content">
                <div class="header__top">
                  <h1 class="main-title">online shop</h1>
                  <div class="inner-cart">
                    <p class="cart-title">Cart</p>
                    <div class ="cart">${item}</div>
                  </div> 
                </div>  
               </div>`;
    header.innerHTML = html;
  }
}

export default Header;
