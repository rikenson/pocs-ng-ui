import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemForm } from './ItemForm';

describe('ItemFormComponent', () => {
  let component: ItemForm;
  let fixture: ComponentFixture<ItemForm>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemForm]
    });
    fixture = TestBed.createComponent(ItemForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
