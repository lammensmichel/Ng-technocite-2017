import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cart-prise',
  templateUrl: './cart-prise.component.html',
  styleUrls: ['./cart-prise.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartPriseComponent implements OnInit {
  @Input() price: number;
  monStockage: Storage ;
  constructor() { }

  miseAZero() {
    this.monStockage = localStorage;
    this.price = 0;
    this.monStockage.setItem('prix', '0');
  }

  ngOnInit() {
  }

}
