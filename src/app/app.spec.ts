import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [App]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'poc-ui'`, () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('poc-ui');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('poc-ui app is running!');
  });
});
