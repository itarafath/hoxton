import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PolicyResolver} from '../../services/policy.resolver';
import {PolicyComponent} from './policy/policy.component';

const routes: Routes = [
  {
    path: '',
    resolve: {policyResolver: PolicyResolver},
    component: PolicyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PolicyRoutingModule {
}
