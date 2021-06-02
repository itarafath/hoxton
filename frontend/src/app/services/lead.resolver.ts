import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {PolicyService} from './policy.service';

@Injectable({providedIn: 'root'})
export class LeadResolver implements Resolve<any[]> {
  constructor(
    private policyService: PolicyService
  ) {
  }

  resolve(): Observable<any> | Promise<any> | any {
    return this.policyService.all().pipe(map((policies: any) => policies.data));
  }
}
