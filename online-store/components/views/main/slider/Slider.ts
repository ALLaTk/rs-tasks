import './slider.scss';

class Slider {
  price: HTMLDivElement;

  quantity: HTMLDivElement;

  constructor() {
    this.price = document.createElement('div');
    this.quantity = document.createElement('div');
  }

  addSliderPrice(): void {
    const render = <HTMLDivElement>document.querySelector('.render');
    this.price.className = 'sliedr-container';
    const content = `<p class="price-title">Price</p>
                     <div class="price-number">
                       <div class="min">120</div>
                       <div class="max">520</div>
                     </div>
                     <div class="container">
                       <input type="range" min="120" step="20" max="520" value="120">
                       <input type="range" min="120" step="20" max="520" value="520">
                     </div>`;
    this.price.innerHTML = content;
    render.append(this.price);
  }

  addSliderQuantity(): void {}
}

export default Slider;
