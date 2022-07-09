import './search.scss';
import Control from '../../Control';

class Search extends Control {
  parent: HTMLElement;

  constructor(parent: HTMLElement) {
    super(parent, 'div', 'search');
    this.parent = parent;
  }

  render(): void {
    const html = `
    <input placeholder="Search" type="text" class="search-input" value="">`;
    this.element.innerHTML = html;
    (<HTMLElement>document.body.lastChild)?.appendChild(this.element);
    this.parent.append(<HTMLElement>document.body.lastChild);
  }
}

const search: Search = new Search(document.body);

export default search;
