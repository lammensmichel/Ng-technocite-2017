import { Component, OnInit, ViewEncapsulation, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-products-image',
  templateUrl: './products-image.component.html',
  styleUrls: ['./products-image.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsImageComponent implements OnInit {
  @Input() image: string;
  @HostBinding('attr.class') cssClass= 'ui small image';
  constructor() { }

  ngOnInit() {
  }

}
