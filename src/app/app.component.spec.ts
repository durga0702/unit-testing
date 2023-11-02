import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
   
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unit-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance; 
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#title')?.textContent).toContain(component.title);
  });

  it('should have a router outlet',() => {
      const fixture = TestBed.createComponent(AppComponent);
      const element = fixture.debugElement.query(By.directive(RouterOutlet));
      expect(element).not.toBeNull();
    });

    it('should have a add button to redirect add page',() => {
      const fixture = TestBed.createComponent(AppComponent);
      const compiled = fixture.nativeElement as HTMLElement;
      const element = compiled.querySelector('#add');
      expect(element).not.toBeNull();
    });

    // it('should have a list button to redirect list page',() => {
    //   const fixture = TestBed.createComponent(AppComponent);
    //   const compiled = fixture.nativeElement as HTMLElement;
    //   const element = compiled.querySelector('#list');
    //   expect(element).not.toBeNull();
    // });

    // it('should have a update button to redirect update page',() => {
    //   const fixture = TestBed.createComponent(AppComponent);
    //   const compiled = fixture.nativeElement as HTMLElement;
    //   const element = compiled.querySelector('#update');
    //   expect(element).not.toBeNull();
    // });
});
