
import {Routes, RouterModule} from "@angular/router";

import {EmployeeComponent} from "./employee/employee.component";
import {NgModule} from "@angular/core";
import {RewardComponent} from "./reward/reward.component";
import {DepartmentComponent} from "./department/department.component";
import {EmployeeDetailsComponent} from "./employee-details/employee-details.component";


export const routes: Routes = [
  { path: 'employees', component: EmployeeComponent },
  { path: 'rewards', component: RewardComponent },
  { path: 'departments', component: DepartmentComponent },
  { path: 'empDetails/:id', component: EmployeeDetailsComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
