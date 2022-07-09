import './news.css';
import { ArticleData, NewsAndSoursesInterface } from '../../app/appTypes';

export class News implements NewsAndSoursesInterface<ArticleData> {
  public draw(data: ArticleData[]): void {
    if (data.length !== 0) {
      console.log('no news in this section');
    } else {
      const news: ArticleData[] =
        data.length >= 10 ? data.filter((_item: ArticleData, idx: number): boolean => idx < 10) : data;

      const fragment: DocumentFragment = document.createDocumentFragment();
      const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');
      news.forEach((item: ArticleData, idx: number): void => {
        const newsClone = <HTMLElement>newsItemTemp.content.cloneNode(true);
        const newsItem = <HTMLElement>newsClone.querySelector('.news__item');
        const newsPhoto = <HTMLElement>newsClone.querySelector('.news__meta-photo');
        if (idx % 2) newsItem.classList.add('alt');

        newsPhoto.style.backgroundImage = `url(${item.urlToImage || 'assets/news_placeholder.jpg'})`;
        (<HTMLTextAreaElement>newsClone.querySelector('.news__meta-author')).textContent =
          item.author || item.source.name;
        (<HTMLTextAreaElement>newsClone.querySelector('.news__meta-date')).textContent = item.publishedAt
          .slice(0, 10)
          .split('-')
          .reverse()
          .join('-');

        (<HTMLElement>newsClone.querySelector('.news__description-title')).textContent = item.title;
        (<HTMLElement>newsClone.querySelector('.news__description-source')).textContent = item.source.name;
        (<HTMLElement>newsClone.querySelector('.news__description-content')).textContent = item.description;
        (<HTMLElement>newsClone.querySelector('.news__read-more a')).setAttribute('href', item.url);

        fragment.append(newsClone);
      });

      (<InnerHTML>document.querySelector('.news')).innerHTML = '';
      (<HTMLDivElement>document.querySelector('.news')).appendChild(fragment);
    }
  }
}
