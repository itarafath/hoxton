import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {UserService} from './user.service';

@Injectable({providedIn: 'root'})
export class PolicyResolver implements Resolve<any[]> {
  constructor(
    private userService: UserService
  ) {
  }

  resolve(): Observable<any> | Promise<any> | any {
    return this.userService.usersByRole().pipe(map((data: any) => data.data));
  }
}
