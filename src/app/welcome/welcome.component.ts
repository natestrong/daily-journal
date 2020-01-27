import {Component, OnInit} from '@angular/core';
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

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth)
  }

}
