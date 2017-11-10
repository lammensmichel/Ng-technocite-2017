import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Jour } from '../models/jour';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }
  @Output() jours: EventEmitter<Jour[]> = new EventEmitter<Jour[]>();
  result: Jour[] = [];
  data: Object[];

  getMeteo(): Observable<Object> {
   return  this.http.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`)
   .map((res: Response) => res.json())
   .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

}
