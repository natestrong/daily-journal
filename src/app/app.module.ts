import {NgModule} from '@angular/core'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component/app.component'
import {ServiceWorkerModule} from '@angular/service-worker'
import {environment} from '../environments/environment'
import {MaterialModule} from './material.module'
import {HistoryComponent} from './history/history.component'
import {UserPrefsComponent} from './user-prefs/user-prefs.component'
import {FlexLayoutModule} from '@angular/flex-layout'
import {HeaderComponent} from './navigation/header/header.component'
import {SidenavListComponent} from './navigation/sidenav-list/sidenav-list.component'
import {AuthService} from './auth/auth.service'
import {JournalService} from './journal/journal.service'
import {AngularFireModule} from '@angular/fire'
import {AngularFirestoreModule} from '@angular/fire/firestore'
import {AngularFireAnalyticsModule} from '@angular/fire/analytics'
import {UIService} from './shared/ui.service'
import {AuthModule} from './auth/auth.module'
import {SharedModule} from './shared/shared.module'
import {BrowserModule} from '@angular/platform-browser'
import {CommonModule} from '@angular/common'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {StoreModule} from '@ngrx/store'
import {reducers} from './app.reducer'

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    UserPrefsComponent,
    HeaderComponent,
    SidenavListComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    SharedModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [
    AuthService,
    JournalService,
    UIService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
