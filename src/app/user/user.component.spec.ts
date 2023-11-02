import { ComponentFixture, TestBed, async, fakeAsync } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [ReactiveFormsModule, FormsModule]
    });
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    // component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have username tag',() => {
    const fixture = TestBed.createComponent(UserComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const element = compiled.querySelector('#user-name');
    expect(element).not.toBeNull();
  });
  it('should have email tag',() => {
    const fixture = TestBed.createComponent(UserComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const element = compiled.querySelector('#email');
    expect(element).not.toBeNull();
  });
  it('should have submit button tag',() => {
    const fixture = TestBed.createComponent(UserComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const element = compiled.querySelector('#addUser');
    expect(element).not.toBeNull();
  });
  it('should have submit logo tag',() => {
    const fixture = TestBed.createComponent(UserComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const element = compiled.querySelector('#image');
    expect(element).not.toBeNull();
  });

  it('should click Add User button', fakeAsync(() => {
    fixture.detectChanges();
    let buttonElement = fixture.debugElement.query(By.css('#userForm'));
    buttonElement.triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      //  expect(buttonElement).toHaveBeenCalled();
    });
  }));
  
});
