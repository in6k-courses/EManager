
import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';
import {Employee} from "./employee";
import {Observable} from "rxjs";



@Injectable()
export class EmployeeService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private options  = new RequestOptions({ headers: this.headers });

  constructor(private http: Http ) { }

  private handleError(error: any): Promise<any> {

    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  getAll(): Observable<Employee[]>{
  return this.http.get('/api/employee/')
                  .map((res:Response) => res.json())
                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  get(id: number): Observable<Employee>{
    return this.http.get(`/api/employee/${id}`)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  delete(id: number):Observable<Employee>{

    return this.http.delete(`/api/employee/${id}`)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  create(employee: Employee): Observable<Employee>{
    return this.http.post('/api/employee/', employee, this.options)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  update(employee: Employee): Observable<Employee> {
     return this.http.put('/api/employee/',employee, this.options)
              .map((res:Response) => res.json())
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
}
