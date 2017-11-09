import { Article } from './article/article.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Array<Article> = [];

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    this.articles.push(new Article (title.value, link.value));
    title.value = link.value = '';
    return false;
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  constructor() {
    this.articles.push(new Article('emberjs', 'https://www.emberjs.com/', 1000));
    this.articles.push(new Article('vuejs', 'https://vuejs.org/', 10));
    this.articles.push(new Article('angular', 'https://angular.io/', 100));
  }
}
