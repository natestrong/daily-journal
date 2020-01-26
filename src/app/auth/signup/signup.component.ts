import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {AuthService} from '../auth.service';
import {UIService} from '../../shared/ui.service'
import {Observable} from 'rxjs'
import * as fromRoot from '../../app.reducer'
import {Store} from '@ngrx/store'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isLoading$: Observable<boolean>

  constructor(
    protected authService: AuthService,
    private uiService: UIService,
    private store: Store<fromRoot.State>
  ) {
  }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading)
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }

}
