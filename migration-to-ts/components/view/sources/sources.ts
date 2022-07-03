import './sources.css';
import { SoursesData, NewsAndSoursesInterface } from '../../app/appTypes';

export class Sources implements NewsAndSoursesInterface<SoursesData> {
  draw(data: SoursesData[]): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const alphaChar: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
    const alpha = document.querySelector('#alphabetItemTemp') as HTMLTemplateElement;
    const uniqueChars: Set<string> = new Set();

    data.forEach((item: SoursesData): void => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;
      (sourceClone.querySelector('.source__item') as HTMLElement).textContent = item.name;

      (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);
      uniqueChars.add(item.name[0]);
      fragment.append(sourceClone);
    });

    for (const char of uniqueChars) {
      const alphaClone = alpha.content.cloneNode(true) as HTMLTemplateElement;
      (alphaClone.querySelector('.alpha__char') as HTMLElement).textContent = char;
      alphaChar.append(alphaClone);
    }

    (document.querySelector('.alphabet') as HTMLElement).append(alphaChar);
    (document.querySelector('.sources') as HTMLElement).append(fragment);
    (document.querySelector('.alpha__char') as HTMLElement).className = 'alpha__char active';

    const sourseItems = [...document.querySelectorAll('.source__item')] as HTMLElement[];
    const alphItem = document.querySelector('.alpha__char.active') as HTMLElement;

    sourseItems.forEach((el: HTMLElement): void => {
      if (el.innerHTML[0] === alphItem.innerHTML[0]) {
        el.style.display = 'block';
      }
    });
  }
}
