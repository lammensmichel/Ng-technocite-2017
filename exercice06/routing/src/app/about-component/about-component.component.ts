import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
