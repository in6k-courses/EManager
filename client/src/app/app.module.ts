import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {EmployeeComponent} from "./employee/employee.component";
import {EmployeeService} from "./employee/employee.service";
import {AppRoutingModule} from "./app.routing.module";
import {RewardComponent} from "./reward/reward.component";



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    RewardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
