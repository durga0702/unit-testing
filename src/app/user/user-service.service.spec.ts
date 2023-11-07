import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './user-service.service';


describe('myService', () => {

      beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule], 
      }));

       xit('should be created', () => {
        const service: UserService = TestBed.get(UserService);
        expect(service).toBeTruthy();
       });

       xit('should have getData function', () => {
        const service: UserService = TestBed.get(UserService);
         expect(service.getAsyncValue).toBeTruthy();
       });
    //    it('should have getData is valid', () => {
    //     const service: UserService = TestBed.get(UserService);
    //     const dummyData = [{
    //         id:0,
    //         name:'abc',
    //         email:'abc@mail.com'
    //     }]
    //     expect(service.getValue).toBe(dummyData);
    //    });

    });