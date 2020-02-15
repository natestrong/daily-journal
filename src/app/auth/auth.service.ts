import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {AuthData} from './auth-data.model'
import {AngularFireAuth} from '@angular/fire/auth'
import {UIService} from '../shared/ui.service'
import {Store} from '@ngrx/store'
import * as fromRoot from '../app.reducer'
import * as UI from '../shared/ui.actions'
import * as Auth from './auth.actions'
import {User} from 'firebase'
import {AngularFirestore} from '@angular/fire/firestore'
import {FSUser} from './user.model'


@Injectable()
export class AuthService {
  public fbUser: User
  public fsUser

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private uiService: UIService,
    private store: Store<fromRoot.State>,
    private db: AngularFirestore
  ) {
  }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.store.dispatch(new Auth.SetAuthenticated())
        this.router.navigate(['/today'])
        this.fbUser = user
        this.fsGetUser()
      } else {
        this.store.dispatch(new Auth.SetUnauthenticated())
        this.router.navigate(['/welcome'])
        this.fsUser = null
        this.fbUser = null
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

  fsGetUser() {
    this.db.collection('users')
    .doc(this.fbUser.uid).valueChanges().subscribe(doc => {
      if (doc) {
        this.fsUser = {...(doc as any)}
      } else {
        this.fsCreateUser()
      }
    })
  }

  fsCreateUser() {
    const fsUser: FSUser = {
      displayName: this.fbUser.displayName,
      firstTimeUse: true,
      email: this.fbUser.email,
      uid: this.fbUser.uid
    }
    this.db.collection('users').doc(fsUser.uid).set(fsUser)
  }
}
