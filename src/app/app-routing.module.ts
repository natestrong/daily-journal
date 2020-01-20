import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {LoginComponent} from './auth/login/login.component';
import {HistoryComponent} from './history/history.component';
import {JournalComponent} from './journal/journal.component';
import {AuthGuard} from './auth/auth.guard'


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'signup', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'today', component: JournalComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
