import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsRowComponent } from './products-row/products-row.component';
import { ProductsImageComponent } from './products-image/products-image.component';
import { ProductsDepartementComponent } from './products-departement/products-departement.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { CartPriseComponent } from './cart-prise/cart-prise.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsRowComponent,
    ProductsImageComponent,
    ProductsDepartementComponent,
    PriceDisplayComponent,
    CartPriseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
