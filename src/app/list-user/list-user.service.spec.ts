import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ListUserService } from './list-user.service';
import { ListUserComponent, PeriodicElement } from './list-user.component';

describe('List User Service', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let listUserService: ListUserService;
  let dummyData: PeriodicElement[];
  let component: ListUserComponent;
  let mockService: any;
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
    //spy on other methods
    let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        ListUserService,
        {
          provide: HttpClient,
          useValue: httpClientSpyObj,
        },
      ],
    });
    listUserService = TestBed.inject(ListUserService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    //spy on functons
    mockService = jasmine.createSpyObj(['getValue', 'deleteValue', 'getSingleValue'])
    component = new ListUserComponent(mockService)
  })
  describe('delete()', () => {
    beforeEach(() => {
      component.dataSource = dummyData;
    })
    it('should delete selected data', () => {
      // component.dataSource = dummyData;
      component.onRemove(dummyData[1]);
      expect(component.dataSource.length).toBe(2);
    });
    it('should call delete selected data only once', () => {
      // component.dataSource = dummyData;
      component.onRemove(dummyData[1]);
      expect(mockService.deleteValue).toHaveBeenCalledTimes(1);
    })
    it('should delete actual selected data', () => {
      // component.dataSource = dummyData;
      component.onRemove(dummyData[1]);
      for (let data of component.dataSource) {
        expect(data).not.toEqual(dummyData[1]);
      }

    })

  })


  describe('getValue()', () => {

    it('should return expected datas when getValue() is called', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(dummyData));
      listUserService.getValue().subscribe({
        next: (res) => {
          expect(res).toEqual(dummyData);
          done();
        },
        error: () => {
          done.fail;
        },
      });
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });

    it('should return expected data when getSingleValue() is called', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(dummyData[1]));
      listUserService.getSingleValue(dummyData[1]).subscribe({
        next: (res) => {
          expect(res).toEqual(dummyData[1]);
          done();
        },
        error: () => {
          done.fail;
        },
      });
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });
});
