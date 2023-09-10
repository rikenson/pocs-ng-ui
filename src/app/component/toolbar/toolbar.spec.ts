import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Toolbar} from './toolbar';

describe('ToolbarComponent', () => {
  let component: Toolbar;
  let fixture: ComponentFixture<Toolbar>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Toolbar]
    });
    fixture = TestBed.createComponent(Toolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
