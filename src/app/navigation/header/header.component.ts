import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as fromRoot from '../../app.reducer'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {AuthService} from '../../auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth$: Observable<boolean>
  @Output()
  sidenavToggle = new EventEmitter<void>()
  @Input()
  title: string

  constructor(
    private store: Store<fromRoot.State>,
    public authService: AuthService
  ) {
  }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth)
  }

  onToggleSidenav() {
    this.sidenavToggle.emit()
  }
}
