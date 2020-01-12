import {Component, OnInit} from '@angular/core';
import {Form} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: Form) {
    console.log(form)
  }

}
