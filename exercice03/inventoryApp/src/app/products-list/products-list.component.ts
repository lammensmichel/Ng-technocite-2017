import { Product } from './../models/product.model';
import { Component, Output, EventEmitter, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsListComponent implements OnInit {
  @Input() products: Array<Product>;
  @Output() onProductSelected: EventEmitter<Product>;

  clicked(product) {
    this.onProductSelected.emit(product);
  }
  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

}
