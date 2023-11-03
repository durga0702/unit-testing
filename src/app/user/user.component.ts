import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  email: string;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

/**
 * component
 */
export class UserComponent implements OnInit {
  public addUser!: FormGroup<any>;
  displayedColumns: string[] = ['index','name', 'email', 'Action'];
  public data:any = [];
  public dataSource:any = new MatTableDataSource<PeriodicElement>([]);
  private emailPattern = '^[a-zA-Z0-9_%+-.]+([.][a-zA-Z0-9_%+-])*@[a-zA-Z0-9-]+(\\.[a-zA-Z]{2,3}|\\.[a-zA-Z]{2,3}\.[a-zA-Z]{2,3})$';
  public key = 0;
  public id:any = 0;
  /**
   * constructor
   * 
   */
  constructor(private route: Router,
    private fb: FormBuilder,) { }

    /**
     * initial loader
     */
  ngOnInit(): void {
    this.addUser = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    });
  }


/**
 * navigate to dashboard
 */
  public toDashboard() {
    this.route.navigateByUrl('/dashboard');
  }

  /**
   * add user
   */
  public onSubmit() {
    if(!this.addUser.valid) return;
    this.data.push(this.addUser.value)
    this.dataSource = [...this.data];
    this.addUser.reset();
  }

  public onRemove(data:number){
    this.data.splice(data,1);
    this.dataSource = [...this.data];
  }

  public onView(data:number){
    this.key = 1;
    this.id = data;
    this.addUser.patchValue({...this.data[this.id]})
  }

  public onUpdateUser(){
   this.data[this.id] = this.addUser.value;
    this.dataSource = [...this.data];
    this.key = 0;
    this.id = 0;
    this.addUser.reset();

  }
}
