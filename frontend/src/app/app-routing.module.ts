import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth.guard';
import {LayoutComponent} from './modules/layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lead',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'lead',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    loadChildren: () => import('./modules/lead/lead.module').then(m => m.LeadModule)
  },
  {
    path: 'policy',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    loadChildren: () => import('./modules/policy/policy.module').then(m => m.PolicyModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
