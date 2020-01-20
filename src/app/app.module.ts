import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component/app.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ServiceWorkerModule} from '@angular/service-worker'
import {environment} from '../environments/environment'
import {MaterialModule} from './material.module'
import {SignupComponent} from './auth/signup/signup.component'
import {LoginComponent} from './auth/login/login.component'
import {HistoryComponent} from './history/history.component'
import {TableComponent} from './history/table/table.component'
import {JournalComponent} from './journal/journal.component'
import {UserPrefsComponent} from './user-prefs/user-prefs.component'
import {WelcomeComponent} from './welcome/welcome.component'
import {FlexLayoutModule} from '@angular/flex-layout'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HeaderComponent} from './navigation/header/header.component'
import {SidenavListComponent} from './navigation/sidenav-list/sidenav-list.component'
import {QuillModule} from 'ngx-quill'
import {AuthService} from './auth/auth.service'
import {JournalService} from './journal/journal.service'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HistoryComponent,
    TableComponent,
    JournalComponent,
    UserPrefsComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],
          [{list: 'ordered'}, {list: 'bullet'}],
          [{size: ['small', false, 'large', 'huge']}],  // custom dropdown
        ]
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    JournalService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
