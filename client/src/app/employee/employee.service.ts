
import {Injectable} from "@angular/core";
import { Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Employee} from "./employee";
import headersToString = http.headersToString;
import {Reward} from "../reward/reward";



@Injectable()
export class EmployeeService {
  private employeeUrl = '/api/employee/getAll/';

  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http ) {  }

  getAll(): Promise<Employee[]> {
    return this.http.get(this.employeeUrl)
      .toPromise()
      .then(response => response.json() as Employee[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  delete(id: number):Promise<void>{

    return this.http.delete(`/api/employee/delete/${id}`, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string, lastname: string, depId: number): Promise<Employee>{
  return this.http.post(`/api/employee/add/name/${name}/lastName/${lastname}/depId/${depId}`,
                       {headers: this.headers})
    .toPromise()
    .then(res => res.json())
    .catch(this.handleError);
  }





 /* getAll(): Observable<Employee[]> {
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
