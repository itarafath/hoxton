import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  async setToken(token): Promise<void> {
    await localStorage.setItem('auth_token', token);
  }

  getToken(): string {
    return localStorage.getItem('auth_token');
  }

  destroyToken(): void {
    localStorage.removeItem('auth_token');
  }

  logout(): void {
    this.destroyToken();
  }

  login(payload): Observable<any> {
    return this.http.post('/api/login', payload);
  }

  isLoggedIn(): boolean {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }
}
