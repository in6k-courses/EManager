import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {EmployeeComponent} from "./employee/employee.component";
import {AppRoutingModule} from "./app.routing.module";
import {RewardComponent} from "./reward/reward.component";
import {DepartmentComponent} from "./department/department.component";
import {EmployeeDetailsComponent} from "./employee-details/employee-details.component";




@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    RewardComponent,
    DepartmentComponent,
    EmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
