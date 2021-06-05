import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ILead} from '../model/lead.model';
import {IPolicy} from '../model/policy.model';

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

  store(lead: IPolicy): Observable<IPolicy> {
    return this.http.post<IPolicy>(this.baseUrl, lead);
  }
}
