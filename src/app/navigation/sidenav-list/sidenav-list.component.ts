import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from '../../auth/auth.service'
import {Observable} from 'rxjs'
import * as fromRoot from '../../app.reducer'
import {Store} from '@ngrx/store'

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output()
  closeSidenav = new EventEmitter<void>()
  isAuth$: Observable<boolean>

  constructor(
    public authService: AuthService,
    private store: Store<fromRoot.State>,
  ) {
  }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth)
  }

  onClose() {
    this.closeSidenav.emit()
  }
}
