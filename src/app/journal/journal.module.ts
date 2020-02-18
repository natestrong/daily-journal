import {NgModule} from '@angular/core'
import {JournalComponent} from './journal.component'
import {MaterialModule} from '../material.module'
import {SharedModule} from '../shared/shared.module'
import {JournalRoutingModule} from './journal-routing.module'
import {CommonModule} from '@angular/common';
import {MoodComponent} from './mood/mood.component'
import {AngularFullpageModule} from '@fullpage/angular-fullpage';
import {ExerciseComponent} from './exercise/exercise.component';
import {ReadingComponent} from './reading/reading.component';
import {CareerComponent} from './career/career.component';
import {WritingEntryComponent} from './writing-entry/writing-entry.component'
import {EditorModule} from 'primeng/editor'

@NgModule({
  declarations: [
    JournalComponent,
    MoodComponent,
    ExerciseComponent,
    ReadingComponent,
    CareerComponent,
    WritingEntryComponent,
  ],
  imports: [
    AngularFullpageModule,
    CommonModule,
    JournalRoutingModule,
    MaterialModule,
    SharedModule,
    EditorModule,
  ],
  exports: []
})
export class JournalModule {
}
