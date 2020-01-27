import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {WelcomeComponent} from '../welcome/welcome.component'
import {LoginComponent} from './login/login.component'

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'signup', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
