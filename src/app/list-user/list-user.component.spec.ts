import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserComponent } from './list-user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PeriodicElement } from './list-user.component';

describe('ListUserComponent', () => {
  let component: ListUserComponent;
  let fixture: ComponentFixture<ListUserComponent>;
  let dummyData: PeriodicElement[];
  dummyData = [
    {
      id: 1,
      name: 'body 1',
      email: 'title 1',
    },
    {
      id: 2,
      name: 'body 2',
      email: 'title 2',
    },
    {
      id: 3,
      name: 'body 3',
      email: 'title 3',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListUserComponent],
      imports:[HttpClientTestingModule],
     
    });
    fixture = TestBed.createComponent(ListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ListUser Component', () => {
    expect(component).toBeTruthy();
  });


  it('should render value of selected data in ListUser Html Page', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.singleData = dummyData[2];
    fixture.detectChanges();
    expect(compiled.querySelector('#singleDataId')?.textContent).toContain(component?.singleData?.id);
    expect(compiled.querySelector('#singleDataName')?.textContent).toContain(component.singleData.name);
    expect(compiled.querySelector('#singleDataEmail')?.textContent).toContain(component.singleData.email);
  });
});
