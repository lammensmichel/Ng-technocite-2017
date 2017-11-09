import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPriseComponent } from './cart-prise.component';

describe('CartPriseComponent', () => {
  let component: CartPriseComponent;
  let fixture: ComponentFixture<CartPriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
