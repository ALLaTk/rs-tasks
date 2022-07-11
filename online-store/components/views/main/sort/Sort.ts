import './sort.scss';
import Control from '../../Control';

class Sort extends Control {
  parent: HTMLElement;

  sort: HTMLElement;

  search: HTMLElement;

  constructor(parent: HTMLElement) {
    super(parent, 'div', 'render');
    this.parent = parent;
    this.sort = document.createElement('div');
    this.search = document.createElement('div');
  }

  renderSort(): void {
    this.sort.className = 'sort';
    const html = `
      <form action="" method="post">
        <p>Sort by</p>
        <select class="select">
          <option selected value="Price(Lowest)">Price (Lowest)</option>
          <option value="Price(Highest)">Price (Highest)</option>
          <option value="Name(A-Z)">Name (A-Z)</option>
          <option value="Name(Z-A)">Name (Z-A)</option>
       </select>
      </form>`;

    this.sort.innerHTML = html;
    this.element.append(this.sort);
    this.mainContent.appendChild(this.element);
    (<HTMLElement>document.body.lastChild)?.appendChild(this.element);
    this.parent.append(<HTMLElement>document.body.lastChild);
  }

  renderSearch(): void {
    this.search.className = 'search';
    const html = `<p>Search</p>
      <input placeholder="Enter text" type="text" class="search-input" value="">`;
    this.search.innerHTML = html;
    this.element.append(this.search);
    this.mainContent.appendChild(this.element);
    (<HTMLElement>document.body.lastChild)?.appendChild(this.element);
    this.parent.append(<HTMLElement>document.body.lastChild);
  }
}

const sort: Sort = new Sort(document.body);
export default sort;
