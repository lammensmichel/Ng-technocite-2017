import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-products-departement',
  templateUrl: './products-departement.component.html',
  styleUrls: ['./products-departement.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsDepartementComponent implements OnInit {
  @Input() categories:  Array<string>;
  constructor() { }

  ngOnInit() {
  }

}
