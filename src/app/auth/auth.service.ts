import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {AuthData} from './auth-data.model'
import {AngularFireAuth} from '@angular/fire/auth'
import {UIService} from '../shared/ui.service'
import {Store} from '@ngrx/store'
import * as fromRoot from '../app.reducer'
import * as UI from '../shared/ui.actions'


@Injectable()
export class AuthService {
  private _isAuth = false

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private uiService: UIService,
    private store: Store<fromRoot.State>,
  ) {
  }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this._isAuth = true
        this.router.navigate(['/today'])
      } else {
        this._isAuth = false
        this.router.navigate(['/login'])
      }
    })

  }

  registerUser(authData: AuthData) {
    this.store.dispatch(new UI.StartLoading())
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
    .then(result => {
      this.store.dispatch(new UI.StopLoading())

    })
    .catch(error => {
      this.store.dispatch(new UI.StopLoading())
      this.uiService.showSnackbar(error.message, null, 3000)
    })
  }

  login(authData: AuthData) {
    this.store.dispatch(new UI.StartLoading())
    this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
    .then(result => {
      this.store.dispatch(new UI.StopLoading())
    })
    .catch(error => {
      this.store.dispatch(new UI.StopLoading())
      this.uiService.showSnackbar(error.message, null, 3000)
    })
  }

  logout() {
    this.afAuth.auth.signOut()
  }

  get isAuth(): boolean {
    return this._isAuth
  }
}
