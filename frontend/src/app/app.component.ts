import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {IPolicy} from './model/policy.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  hide = true;


  constructor() {
  }

  ngOnInit(): void {

  }
}
