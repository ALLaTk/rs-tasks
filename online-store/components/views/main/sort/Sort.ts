import './sort.scss';
import Control from '../../Control';

class Sort extends Control {
  constructor(parent: HTMLElement) {
    super(parent, 'div', 'sort');
  }

  render(): void {
    const html = `
    <form action="" method="post">
      <p><select class="select">
        <option selected value="Price(Lowest)">Price (Lowest)</option>
        <option value="Price(Highest)">Price (Highest)</option>
        <option value="Name(A-Z)">Name (A-Z)</option>
        <option value="Name(Z-A)">Name (Z-A)</option>
     </select></p>
  </form>`;

    this.element.innerHTML = html;
  }
}

const sort: Sort = new Sort(document.body);
export default sort;
