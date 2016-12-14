
import {Component, OnInit} from "@angular/core";
import {DepartmentService} from "./department.service";
import {Department} from "./departmnet";



@Component({
  moduleId: module.id.toString(),
  selector: 'department-tag',
  templateUrl: 'department.component.html',
  styleUrls: [ 'department.component.css' ],
  providers: [ DepartmentService ]
})

export class DepartmentComponent implements OnInit{

  departments: Department[];


  constructor(private service: DepartmentService){}

  ngOnInit(): void{
    this.getAllDepartments();
  }


  getAllDepartments():void{
  this.service.getAll().then(departments => this.departments = departments);
  }


  add(name: string): void {

  this.service.create(name)
  .then(department => {
  this.departments.push(department)});
  }

}
