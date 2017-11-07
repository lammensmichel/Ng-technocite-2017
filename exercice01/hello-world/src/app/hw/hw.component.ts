import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hw',
  //templateUrl: './hw.component.html',
  template: `<p>hello world </p>`,
  styleUrls: ['./hw.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HwComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
