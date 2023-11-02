import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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

  /**
   * constructor
   * 
   */
  constructor(private route: Router,
    private fb: FormBuilder) { }

    /**
     * initial loader
     */
  ngOnInit(): void {
    this.addUser = this.fb.group({
      name: [''],
      email: [''],
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
    console.log(this.addUser.value)
  }
}
