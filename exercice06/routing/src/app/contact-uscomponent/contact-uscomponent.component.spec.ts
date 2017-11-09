import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUscomponentComponent } from './contact-uscomponent.component';

describe('ContactUscomponentComponent', () => {
  let component: ContactUscomponentComponent;
  let fixture: ComponentFixture<ContactUscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
