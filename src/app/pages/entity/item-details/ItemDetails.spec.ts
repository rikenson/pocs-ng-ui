import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetails } from './ItemDetails';

describe('ItemDetailsComponent', () => {
  let component: ItemDetails;
  let fixture: ComponentFixture<ItemDetails>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDetails]
    });
    fixture = TestBed.createComponent(ItemDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
