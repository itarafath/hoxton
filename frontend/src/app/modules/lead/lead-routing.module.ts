import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LeadComponent} from './lead/lead.component';
import {LeadResolver} from '../../services/lead.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {leadResolver: LeadResolver},
    component: LeadComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LeadRoutingModule {
}
