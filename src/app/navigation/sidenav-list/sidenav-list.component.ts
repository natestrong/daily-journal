import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from '../../auth/auth.service'

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output()
  closeSidenav = new EventEmitter<void>()

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  onClose() {
    this.closeSidenav.emit()
  }

  onLogout() {
    this.onClose();
    this.authService.logout()
  }
}
