
import {Routes, RouterModule} from "@angular/router";

import {EmployeeComponent} from "./employee/employee.component";
import {NgModule} from "@angular/core";
import {RewardComponent} from "./reward/reward.component";


export const routes: Routes = [
  { path: 'employees', component: EmployeeComponent },
  { path: 'rewards', component: RewardComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
