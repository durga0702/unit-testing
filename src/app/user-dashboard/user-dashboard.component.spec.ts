import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardComponent } from './user-dashboard.component';

describe('UserDashboardComponent', () => {
  let component: UserDashboardComponent;
  let fixture: ComponentFixture<UserDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDashboardComponent]
    });
    fixture = TestBed.createComponent(UserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have p tag',() => {
    const fixture = TestBed.createComponent(UserDashboardComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const element = compiled.querySelector('#title');
    expect(element).not.toBeNull();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(UserDashboardComponent);
    const component = fixture.componentInstance; 
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#title')?.textContent).toContain(component.title);
  });
});
