import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';

import {Reward} from "../reward/reward";
import {Employee} from "../employee/employee";

import {EmployeeService} from "../employee/employee.service";


@Component({
  moduleId: module.id.toString(),
  selector: 'employee-details',
  templateUrl: 'employee-details.component.html',
  styleUrls: [ 'employee-details.component.css' ],
  providers: [ EmployeeService ]
})
export class EmployeeDetailsComponent implements OnInit{

  rewards: Reward[];
  employee: Employee;
  id: number;

 constructor ( private service: EmployeeService,
               private route: ActivatedRoute
               ){
 }


  ngOnInit(): void {

/*    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.service.get(this.id)
        .then(employee => this.employee = employee);
  });

    this.xxx = this.employee.name;*/
    this.route.params
      .switchMap((params: Params) => this.service.get(+params['id']))
      .subscribe(employee => this.employee = employee);

/*

    this.route.params.subscribe((params: Params) => {
    this.id = +params['id'];

    this.service.get(this.id).then(employee => this.employee = employee);});
*/

/*
this.service.get()*/

  }

}
