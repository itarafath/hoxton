import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeadComponent} from './lead/lead.component';
import {LeadRoutingModule} from './lead-routing.module';
import {MaterialModule} from '../../material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LeadComponent],
  imports: [
    CommonModule,
    LeadRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class LeadModule {
}
