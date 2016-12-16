
import {Injectable} from "@angular/core";
import { Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';
import {Employee} from "./employee";
import headersToString = http.headersToString;
import {Reward} from "../reward/reward";



@Injectable()
export class EmployeeService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http ) { }

  getAll(): Promise<Employee[]> {

    return this.http.get('/api/employee/')
      .toPromise()
      .then(response => response.json() as Employee[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {

    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  delete(id: number):Promise<void>{

    return this.http.delete(`/api/employee/${id}`, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string, lastName: string, depId: number): Promise<Employee>{

    return this.http.post(
              '/api/employee/',
               JSON.stringify({name: name, lastName: lastName, depId: depId}),
               {headers: this.headers})
    .toPromise()
    .then(res => res.json())
    .catch(this.handleError);

  }

  get(id: number): Promise<Employee>{
  /*return this.getAll().then(employees => employees.find(employee => employee.id === id));*/
    return this.http.get(`/api/employee/${id}`)
      .toPromise()
      .then(res => res.json() as Employee)
      .catch(this.handleError);
  }

  update(employee: Employee): void {
    this.http.put('/api/employee/',
      JSON.stringify(employee), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);

    /*alert(JSON.stringify(employee));*/
  }

 /* getEmployeeRewards(id: number): Promise<Reward>{

    return this.get(id).then(rewards => )
  }*/








 /*

 getAll(): Observable<Employee[]> {
    return this.http.get(this.employeeUrl)
        .toArray(this.extractData);
/!*      .catch(this.handleError);*!/
  }

  private extractData(res: Response){
    let body = res.json();
    return body.data || {}

  }*/
 /* private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }*/

}
