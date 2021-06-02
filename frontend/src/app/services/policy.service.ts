import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ILead} from '../model/lead.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  private http: HttpClient;
  private baseUrl = '/api/policy';

  constructor(http: HttpClient) {
    this.http = http;
  }

  all(): Observable<ILead> {
    return this.http.get<ILead>(this.baseUrl);
  }
}
