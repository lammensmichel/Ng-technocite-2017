import { Product } from '../models/product.model';
import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-products-row',
  templateUrl: './products-row.component.html',
  styleUrls: ['./products-row.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsRowComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass= 'item';
  constructor() { }

  ajouterPanier() {
    this.product.qte += 1;
  }

  retirerPanier() {
    this.product.qte =  this.product.qte > 0 ? this.product.qte - 1 : 0;
  }
  ngOnInit() {}

}
