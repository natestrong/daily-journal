import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from '../../auth/auth.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  authSubscription: Subscription
  isAuth: boolean
  @Output()
  closeSidenav = new EventEmitter<void>()

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus
    })
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe()
  }

  onClose() {
    this.closeSidenav.emit()
  }

  onLogout() {
    this.onClose();
    this.authService.logout()
  }
}
