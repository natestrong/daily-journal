import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs'
import {AuthService} from '../auth/auth.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {
  authSubscription: Subscription
  isAuth: boolean

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus
    })
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe()
  }

}
