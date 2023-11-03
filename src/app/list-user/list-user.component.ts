import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user-service.service';
import { HttpClient } from '@angular/common/http';
import { ListUserService } from './list-user.service';

export interface PeriodicElement {
  id:number,
  name: string;
  email: string;
}
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
 })
export class ListUserComponent implements OnInit {
  displayedColumns: string[] = ['id','name', 'email', 'Action'];
  public dataSource:Array<PeriodicElement> = [];
  public data:any =[];
  public count = 0;
  public singleData:any = {};
  constructor(private userService: ListUserService,){
    
  }

  ngOnInit(): void {
    this.userService.getValue().subscribe((res)=>{
       if(res){
        this.dataSource = res;
      }
   });
  //  setInterval(() => {
  //   this.userService.getAsyncValue().subscribe((res)=>{
  //     if(res){
  //       this.count = this.count+1;
  //       this.data.push({ id:this.count,name:res.city, email:res.region })
  //       this.dataSource = [...this.data];
  //       console.log(this.dataSource)
  //     }
  //   })
  //  }, 1000);
  }
public onRemove(data:any){
this.dataSource = this.dataSource.filter((d: any)=>d.id !== data.id);
this.userService.deleteValue(data);
}

public getSingleValue(data:any){
  this.userService.getSingleValue(data).subscribe((res:any)=>{
     this.singleData = res;
  })
}

}
