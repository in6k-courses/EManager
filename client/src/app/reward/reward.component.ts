
import {Component} from "@angular/core";
import {RewardService} from "./reward.service";
import {Reward} from "./reward";


@Component({
  moduleId: module.id.toString(),
  selector: 'reward-tag',
  templateUrl: 'reward.component.html',
  styleUrls: [ 'reward.component.css' ],
  providers: [ RewardService ]
})

export class RewardComponent {

  rewards: Reward[];
  reward: Reward;

  constructor(private service: RewardService){}

  getAllRewards():void{
    this.service.getAll().then(rewards => this.rewards = rewards);  }


  add(name: string): void{
    this.service.create(name)
      .then(employee => {this.rewards.push(employee)});
  }

}
