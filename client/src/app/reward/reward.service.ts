
import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Reward} from "./reward";
import {Observable} from "rxjs";


@Injectable()
export class RewardService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions ({headers: this.headers});

  constructor(private http: Http){}

  getAll(): Observable<Reward[]> {
    return this.http.get('/api/reward/')
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  create(reward: Reward): Observable<Reward>{
    return this.http.post('/api/reward/', reward,this.options)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
