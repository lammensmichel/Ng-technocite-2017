import { Article } from './article.model';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  constructor() {
   }

  ngOnInit() {
  }

  votesUp(): boolean {
    this.article.votesup();
    return false;
  }

  votesDow(): boolean {
    this.article.votesDow();
    return false;
  }
}
