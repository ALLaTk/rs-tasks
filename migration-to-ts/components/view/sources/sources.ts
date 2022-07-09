import './sources.css';
import { SoursesData, NewsAndSoursesInterface } from '../../app/appTypes';

export class Sources implements NewsAndSoursesInterface<SoursesData> {
  draw(data: SoursesData[]): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const alphaChar: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');
    const alpha = <HTMLTemplateElement>document.querySelector('#alphabetItemTemp');
    const uniqueChars: Set<string> = new Set();

    data.forEach((item: SoursesData): void => {
      const sourceClone = <HTMLTemplateElement>sourceItemTemp.content.cloneNode(true);
      (<HTMLElement>sourceClone.querySelector('.source__item')).textContent = item.name;

      (<HTMLElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);
      uniqueChars.add(item.name[0]);
      fragment.append(sourceClone);
    });

    for (const char of uniqueChars) {
      const alphaClone = <HTMLTemplateElement>alpha.content.cloneNode(true);
      (<HTMLElement>alphaClone.querySelector('.alpha__char')).textContent = char;
      alphaChar.append(alphaClone);
    }

    (<HTMLElement>document.querySelector('.alphabet')).append(alphaChar);
    (<HTMLElement>document.querySelector('.sources')).append(fragment);
    (<HTMLElement>document.querySelector('.alpha__char')).className = 'alpha__char active';

    const sourseItems = <HTMLElement[]>[...document.querySelectorAll('.source__item')];
    const alphItem = <HTMLElement>document.querySelector('.alpha__char.active');

    sourseItems.forEach((el: HTMLElement): void => {
      if (el.innerHTML[0] === alphItem.innerHTML[0]) {
        el.style.display = 'block';
      }
    });
  }
}
