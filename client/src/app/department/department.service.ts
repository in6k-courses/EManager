
import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Department} from "./departmnet";
import {Observable} from "rxjs";



@Injectable()
export class DepartmentService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions ({headers: this.headers});

  constructor(private http: Http){}

  getAll(): Observable<Department[]> {
    return this.http.get('/api/department/')
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  create(department: Department): Observable<Department>{
    return this.http.post('/api/department/',department,this.options)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
/*
  getTop(): Promise<Department[]>{

    return this.http.get('/api/department/best')
      .toPromise()
      .then(response => response.json() as Department[])
      .catch(this.handleError);
  }*/


}
