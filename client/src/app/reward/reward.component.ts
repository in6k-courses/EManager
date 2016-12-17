
import {Component, OnInit} from "@angular/core";
import {RewardService} from "./reward.service";
import {Reward} from "./reward";


@Component({
  moduleId: module.id.toString(),
  selector: 'reward-tag',
  templateUrl: 'reward.component.html',
  styleUrls: [ 'reward.component.css' ],
  providers: [ RewardService ]
})

export class RewardComponent implements OnInit{

  rewards: Reward[];

  constructor(private service: RewardService){}

  getAllRewards():void{
    this.service.getAll().subscribe(rewards => this.rewards = rewards);
  }

  ngOnInit(){
    this.getAllRewards();
  }


  add(name: string): void{
    let reward = new Reward();
    reward.name = name;

    this.service.create(reward)
                .subscribe(reward => this.rewards.push(reward));
  }

}
