import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import {Reward} from "../reward/reward";
import {Employee} from "../employee/employee";

import {EmployeeService} from "../employee/employee.service";
import {RewardService} from "../reward/reward.service";


@Component({
  moduleId: module.id.toString(),
  selector: 'employee-details',
  templateUrl: 'employee-details.component.html',
  styleUrls: [ 'employee-details.component.css' ],
  providers: [ EmployeeService, RewardService ]
})
export class EmployeeDetailsComponent implements OnInit{

  rewards: Reward[];
  allRewards: Reward[];

  employee: Employee;
  id: number;

 constructor ( private empService: EmployeeService,
               private rewService: RewardService,
               private route: ActivatedRoute,
               private location: Location){
 }


  ngOnInit(): void {

/*    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.service.get(this.id)
        .then(employee => this.employee = employee);
  });

    this.xxx = this.employee.name; */

    this.route.params
      .switchMap((params: Params) => this.empService.get(+params['id']))
      .subscribe(employee => this.employee = employee);

    this.rewService.getAll().then(allRewards => this.allRewards = allRewards);
    this.getRewards();

  }

  getRewards(): void {
    this.route.params
      .switchMap((params: Params) => this.empService.get(+params['id']))
      .subscribe(employee => this.rewards = employee.rewards);

/*    this.rewards = this.employee.rewards*/
  }



  save(name: string, lastName: string, depId: number): void {
   this.employee.name =name;
   this.employee.lastName = lastName;
   this.employee.depId = depId;

   this.employee.rewards = this.rewards;

   this.empService.update(this.employee);
   this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

  rewardEmployee(reward: Reward): void{
    this.rewards.push(reward);
  }

  deRewardEmployee(reward: Reward): void{
    var index = this.rewards.indexOf(reward, 0);
    this.rewards.splice(index, 1);
  }


}
