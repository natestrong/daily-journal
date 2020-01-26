import {NgModule} from '@angular/core'
import {Route, RouterModule} from '@angular/router'
import {JournalComponent} from './journal.component'

const routes: Route[] = [
  {path: '', component: JournalComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalRoutingModule {
}
