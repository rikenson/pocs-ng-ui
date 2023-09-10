import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSecondary } from './sidebar.secondary';

describe('SidebarSecondaryComponent', () => {
  let component: SidebarSecondary;
  let fixture: ComponentFixture<SidebarSecondary>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarSecondary]
    });
    fixture = TestBed.createComponent(SidebarSecondary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
