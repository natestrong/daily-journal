import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service'
import {Store} from '@ngrx/store'
import * as fromRoot from '../app.reducer'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  isAuth$: Observable<boolean>

  constructor(
    private store: Store<fromRoot.State>,
    public authService: AuthService
  ) {
  }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth)
  }

}
