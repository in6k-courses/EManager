import {Employee} from "./employee";
import {Component, OnInit} from "@angular/core";
import {EmployeeService} from "./employee.service";
import {Router} from "@angular/router";

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


  constructor(private service: EmployeeService,
              private router: Router){}

   ngOnInit(): void{
    this.getAll();
   }


   getAll():void {
    this.service.getAll()
                .subscribe(employees => this.employees = employees);
   }


   delete(employee: Employee): void{

     this.service.delete(employee.id).subscribe();
     var index = this.employees.indexOf(employee, 0);
     this.employees.splice(index, 1);
   }

  add(name: string, lastName: string, depId: number): void {
    let employee = new Employee();
    employee.name = name;
    employee.lastName = lastName;
    employee.depId = depId;

    this.service.create(employee)
                .subscribe(employee => this.employees.push(employee));
  }

  viewEmployee(employee: Employee): void {
    this.router.navigate(['/empDetails', employee.id]);
  }



}
