import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItem } from './ListItem';

describe('EntityListComponent', () => {
  let component: ListItem;
  let fixture: ComponentFixture<ListItem>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListItem]
    });
    fixture = TestBed.createComponent(ListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
