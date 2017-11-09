import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDepartementComponent } from './products-departement.component';

describe('ProductsDepartementComponent', () => {
  let component: ProductsDepartementComponent;
  let fixture: ComponentFixture<ProductsDepartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
