import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPrimary } from './sidebar.primary';

describe('SidebarComponent', () => {
  let component: SidebarPrimary;
  let fixture: ComponentFixture<SidebarPrimary>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarPrimary]
    });
    fixture = TestBed.createComponent(SidebarPrimary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
