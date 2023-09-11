import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';

describe('FooterComponent', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Footer]
    });
    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
