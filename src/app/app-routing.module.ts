import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HistoryComponent} from './history/history.component';
import {AuthGuard} from './auth/auth.guard'

const routes: Routes = [
  {path: 'history', component: HistoryComponent, canActivate: [AuthGuard]},
  {path: 'today', loadChildren: './journal/journal.module#JournalModule', canLoad: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
