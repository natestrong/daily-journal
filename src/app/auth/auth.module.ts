import {NgModule} from '@angular/core'
import {LoginComponent} from './login/login.component'
import {SignupComponent} from './signup/signup.component'
import {WelcomeComponent} from '../welcome/welcome.component'
import {ReactiveFormsModule} from '@angular/forms'
import {AngularFireAuthModule} from '@angular/fire/auth'
import {SharedModule} from '../shared/shared.module'
import {AuthRoutingModule} from './auth-routing.module'
import {MaterialModule} from '../material.module'
import {CommonModule} from '@angular/common'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
  ],
  imports: [
    AngularFireAuthModule,
    AuthRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: []
})
export class AuthModule {
}
