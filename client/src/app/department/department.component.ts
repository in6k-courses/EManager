
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
  top: Department[];

  constructor(private service: DepartmentService){}

  ngOnInit(): void{
    this.getAllDepartments();
  }


  getAllDepartments():void{
  this.service.getAll()
              .subscribe(departments => this.departments = departments);
  }


  add(name: string): void {
  let department = new Department();
  department.name = name;

  this.service.create(department)
              .subscribe(department => this.departments.push(department));
  }

/*  getTop(): void{
    this.service.getTop().then(top => this.top = top);
  }*/

}
