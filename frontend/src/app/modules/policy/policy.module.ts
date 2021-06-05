import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PolicyComponent} from './policy/policy.component';
import {MaterialModule} from '../../material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {PolicyRoutingModule} from './policy-routing.module';

@NgModule({
  declarations: [PolicyComponent],
  imports: [
    CommonModule,
    PolicyRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class PolicyModule {
}
