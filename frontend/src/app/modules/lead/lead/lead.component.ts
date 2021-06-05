import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LeadService} from '../../../services/lead.service';
import {IPolicy} from '../../../model/policy.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {
  form: FormGroup;
  policies: IPolicy[];
  types: any[] = [
    {name: 'lead'},
    {name: 'client'}
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private leadService: LeadService
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      type: ['lead', Validators.required],
      policies: [[], Validators.required],
    });

    const {leadResolver} = this.route.snapshot.data;
    this.policies = leadResolver;
  }


  onSubmit(): void {
    const {value} = this.form;
    this.leadService.createLeads(value).subscribe(console.log);
    this.form.reset();
  }
}
