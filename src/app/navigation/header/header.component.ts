import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  sidenavToggle = new EventEmitter<void>()
  @Input()
  title: string

  constructor() {
  }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit()
  }

}
