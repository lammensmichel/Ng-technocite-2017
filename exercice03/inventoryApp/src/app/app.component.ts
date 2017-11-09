import { Product } from './models/product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  products: Array<Product> = [];
  monStockage: Storage ;
  price: number = 0;

  constructor() {
    this.monStockage = localStorage;
    if (this.monStockage.getItem('produit')) {
      this.products = JSON.parse(this.monStockage.getItem('produit'));
    //this.price = this.monStockage.getItem('prix') ? Number(this.monStockage.getItem('prix')) : 0;
    }else {
      this.price = 0;
      this.products.push(new Product('Black running Shoes', '#MYSHOES', '/assets/images/products/black-shoes.jpg', 100.99, 0,['Men', 'Shoes', 'Runing Shoes'] ));
      this.products.push(new Product('Blue Jacket', '#NEATOJACKET', '/assets/images/products/blue-jacket.jpg', 238.99, 0, ['Women', 'Apparel', 'Jackets & Vests'] ));
      this.products.push(new Product('A Nice Black Hat', '#NICEHAT', '/assets/images/products/black-hat.jpg', 29.99, 0, ['Men', 'Accessories', 'hats'] ));
    }
    this.calculePanier();
  }
  productchanged(product: Product): void {
    this.calculePanier();
  }

  calculePanier() {
    this.price = 0;
    this.products.map( x => this.price += (x.qte * x.price));
    this.monStockage.setItem('produit', JSON.stringify(this.products));
  }

}
