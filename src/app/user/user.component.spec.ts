import { ComponentFixture, TestBed, async, fakeAsync } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
  it('should have username tag', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const element = compiled.querySelector('#user-name');
    expect(element).not.toBeNull();
  });
  it('should have email tag', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const element = compiled.querySelector('#email');
    expect(element).not.toBeNull();
  });
  it('should have submit button tag', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const element = compiled.querySelector('#addUser');
    expect(element).toBeNull();
  });
  it('should have submit logo tag', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const element = compiled.querySelector('#image');
    expect(element).not.toBeNull();
  });

  it('should click Add User button', () => {
    spyOn(fixture.componentInstance, 'onSubmit');
    let addUserBtn = fixture.debugElement.query(By.css('#addUser'));
    addUserBtn.nativeElement.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.onSubmit).toHaveBeenCalled();
  });
  
// Test Cases for addUser form validation
  it('should valid', () => {
    const dummyData ={
      name:'abc',
      email:'abc@mail.com',
    }
    component.addUser.patchValue({...dummyData});
    expect(component.addUser.valid).toBeTruthy();
  });
  it('should valid', () => {
    const dummyData ={
      name:'abc',
      email:'abc@mail.co.in',
    }
    component.addUser.patchValue({...dummyData});
    expect(component.addUser.valid).toBeTruthy();
  });
  it('should not valid', () => {
    const dummyData ={
      name:'',// required value
      email:'abc@mail.co',
    }
    component.addUser.patchValue({...dummyData});
    expect(component.addUser.valid).toBeFalsy();
  });
  it('should not valid', () => {
    const dummyData ={
      name:'abc',
      email:'',//required value
    }
    component.addUser.patchValue({...dummyData});
    expect(component.addUser.valid).toBeFalsy();
  });
  it('should not valid', () => {
    const dummyData ={
      name:'abc',
      email:'abcmail.com',// invalid
    }
    component.addUser.patchValue({...dummyData});
    expect(component.addUser.valid).toBeFalsy();
  });
  it('should not valid', () => {
    const dummyData ={
      name:'abc',
      email:'abc@mail',//invalid
    }
    component.addUser.patchValue({...dummyData});
    expect(component.addUser.valid).toBeFalsy();
  });
  it('should not valid', () => {
    const dummyData ={
      name:'abc',
      email:'abc@m.c',//invalid
    }
    component.addUser.patchValue({...dummyData});
    expect(component.addUser.valid).toBeFalsy();
  });
  it('should not valid', () => {
    const dummyData ={
      name:'abc',
      email:'abc@.co',//invalid
    }
    component.addUser.patchValue({...dummyData});
    expect(component.addUser.valid).toBeFalsy();
  });



});
