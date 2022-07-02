import './news.css';
import { ArticleData, NewsAndSoursesInterface } from '../../app/appTypes';

export class News implements NewsAndSoursesInterface<ArticleData> {
  public draw(data: ArticleData[]): void {
    const news: ArticleData[] =
      data.length >= 10 ? data.filter((_item: ArticleData, idx: number): boolean => idx < 10) : data;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item: ArticleData, idx: number): void => {
      const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

      if (idx % 2) (newsClone.querySelector('.news__item') as HTMLElement).classList.add('alt');

      (newsClone.querySelector('.news__meta-photo') as HTMLElement).style.backgroundImage = `url(${
        item.urlToImage || 'assets/news_placeholder.jpg'
      })`;
      (newsClone.querySelector('.news__meta-author') as HTMLTextAreaElement).textContent =
        item.author || item.source.name;
      (newsClone.querySelector('.news__meta-date') as HTMLTextAreaElement).textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      (newsClone.querySelector('.news__description-title') as HTMLElement).textContent = item.title;
      (newsClone.querySelector('.news__description-source') as HTMLElement).textContent = item.source.name;
      (newsClone.querySelector('.news__description-content') as HTMLElement).textContent = item.description;
      (newsClone.querySelector('.news__read-more a') as HTMLElement).setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    (document.querySelector('.news') as InnerHTML).innerHTML = '';
    (document.querySelector('.news') as HTMLDivElement).appendChild(fragment);
  }
}
