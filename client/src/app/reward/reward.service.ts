
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Reward} from "./reward";


@Injectable()
export class RewardService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){}

  getAll(): Promise<Reward[]> {
    return this.http.get('/api/reward/')
      .toPromise()
      .then(response => response.json() as Reward[])
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  create(name: string): Promise<Reward>{
    return this.http.post('/api/reward/',
      JSON.stringify({name: name}),
      {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

}
