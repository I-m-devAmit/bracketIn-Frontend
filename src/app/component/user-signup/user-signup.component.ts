import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsernameValidator, ParentErrorStateMatcher } from '../../_validators';
import { AngularMaterialModule } from 'src/app/feature/module/material/material.module';

import { MustMatch } from '../../_helpers/must-match.validator'

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserSignupComponent implements OnInit {


  constructor() { }
  ngOnInit() {


  }
}
