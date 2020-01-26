import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from '../../auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output()
  sidenavToggle = new EventEmitter<void>()
  @Input()
  title: string

  constructor(
    public authService: AuthService,
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit()
  }

}
