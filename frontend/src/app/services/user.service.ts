import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http: HttpClient;
  private baseUrl = '/api/user';

  constructor(http: HttpClient) {
    this.http = http;
  }

  usersByRole(): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/users-by-role`);
  }
}
