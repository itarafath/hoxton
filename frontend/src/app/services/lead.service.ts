import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILead} from '../model/lead.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  private http: HttpClient;
  private baseUrl = '/api/leads';

  constructor(http: HttpClient) {
    this.http = http;
  }

  createLeads(lead: ILead): Observable<ILead> {
    return this.http.post<ILead>(this.baseUrl, lead);
  }
}
