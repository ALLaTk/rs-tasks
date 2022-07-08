import './search.scss';
import  Control from '../../Control';

class Search extends Control {

  constructor(parent: HTMLElement) {
    
    super(parent, 'div', 'search');
  
}

render(): void {
    const html: string = `
    <input placeholder="Search" type="text" class="search-input" value="">`
   this.element.innerHTML = html     

}

}

const search: Search = new Search(document.body);

export default search;
