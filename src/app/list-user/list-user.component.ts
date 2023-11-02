import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user-service.service';

export interface PeriodicElement {
  name: string;
  email: string;
}
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email'];
  public dataSource:any = [];

  constructor(private userService: UserService,){
    
  }

  ngOnInit(): void {
    this.userService.getValue().subscribe((res)=>{
      if(res){
        this.dataSource.push(res)
      }
    });
  }
}
