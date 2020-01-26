import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  constructor(
    public authService: AuthService,
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
