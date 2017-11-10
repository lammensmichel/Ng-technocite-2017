import { HttpService } from './../service/http.service';
import { Jour } from './../models/jour';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  jours: Array<Jour>;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getMeteo().subscribe(
      (results: Object): any => {
        this.jours = results.query.results.channel.item.forecast.map((x) => new Jour(x.date, x.text, x.text));
      }
    );
  }

}
