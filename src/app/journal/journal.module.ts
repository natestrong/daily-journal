import {NgModule} from '@angular/core'
import {JournalComponent} from './journal.component'
import {QuillModule} from 'ngx-quill'
import {MaterialModule} from '../material.module'
import {SharedModule} from '../shared/shared.module'
import {JournalRoutingModule} from './journal-routing.module'
import {CommonModule} from '@angular/common';
import { MoodComponent } from './mood/mood.component'
import {AngularFullpageModule} from '@fullpage/angular-fullpage'

@NgModule({
  declarations: [
    JournalComponent,
    MoodComponent,
  ],
  imports: [
    AngularFullpageModule,
    CommonModule,
    JournalRoutingModule,
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
    SharedModule,
  ],
  exports: []
})
export class JournalModule {
}
