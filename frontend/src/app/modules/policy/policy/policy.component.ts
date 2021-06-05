import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IUser} from '../../../model/user.model';
import {ActivatedRoute} from '@angular/router';
import {PolicyService} from '../../../services/policy.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  form: FormGroup;
  coordinators: IUser[];
  advisors: IUser[];

  constructor(
    private fb: FormBuilder,
    private policyService: PolicyService,
    private router: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      coordinators: [[], Validators.required],
      advisors: [[], Validators.required],
    });

    const {advisor, coordinator} = this.router.snapshot.data.policyResolver;
    this.advisors = advisor;
    this.coordinators = coordinator;
  }

  onSubmit(): void {
    const {value} = this.form;
    this.policyService.store(value).subscribe(console.log);
    this.form.reset();
  }
}
