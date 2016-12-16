
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Department} from "./departmnet";



@Injectable()
export class DepartmentService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){}

  getAll(): Promise<Department[]> {
    return this.http.get('/api/department/')
      .toPromise()
      .then(response => response.json() as Department[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  create(name: string): Promise<Department>{
    return this.http.post('/api/department/',
      JSON.stringify({name: name}),
      {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  getTop(): Promise<Department[]>{

    return this.http.get('/api/department/best')
      .toPromise()
      .then(response => response.json() as Department[])
      .catch(this.handleError);
  }


}
