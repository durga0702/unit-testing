import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table'; 
import {MatIconModule} from '@angular/material/icon'; 
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user-service.service';
import { DemoPipe } from './demo.pipe';
import { AppSocketComponent } from './app-socket/app-socket.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDashboardComponent,
    UpdateUserComponent,
    ListUserComponent,
    DemoPipe,
    AppSocketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule, 
    MatIconModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  public title = 'UNIT TESTING';
}
