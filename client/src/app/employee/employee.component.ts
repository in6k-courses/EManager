import {Employee} from "./employee";
import {Component, OnInit} from "@angular/core";
import {EmployeeService} from "./employee.service";

@Component({
  moduleId: module.id.toString(),
  selector: 'employee-tag',
  templateUrl: 'employee.component.html',
  styleUrls: [ 'employee.component.css' ],
  providers: [ EmployeeService ]
})

export class EmployeeComponent implements OnInit{

  employees: Employee[];
  employee: Employee;
  selectedEmployee: Employee;

  constructor(private service: EmployeeService){}

  ngOnInit(): void {
    this.getAllEmployees();
  }

   getAllEmployees():void{
   this.service.getAll().then(employees => this.employees = employees);
   }

   deleteEmployee(employee: Employee):void{
   this.service.delete(employee.id).then(() => {
     this.employees.filter(emp => emp !== employee)});
   }

  add(name: string, lastName: string, depId: number): void{
    this.service.create(name, lastName, depId)
      .then(employee => {this.employees.push(employee)});
  }

}
