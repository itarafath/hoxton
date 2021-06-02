import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lead',
    pathMatch: 'full'
  },
  {
    path: 'lead',
    loadChildren: () => import('./lead/lead.module').then(m => m.LeadModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
