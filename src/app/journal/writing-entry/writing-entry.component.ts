import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {JournalService} from '../journal.service'
import {Subject, Subscription} from 'rxjs'
import {debounceTime} from 'rxjs/operators'

@Component({
  selector: 'app-writing-entry',
  templateUrl: './writing-entry.component.html',
  styleUrls: ['./writing-entry.component.scss']
})
export class WritingEntryComponent implements OnInit, OnDestroy {
  @Input() journalEntry: string

  editorHeight = 350
  editorWidth = 500

  editorSubject = new Subject<string>()
  editorSubscription: Subscription

  constructor(
    public journalService: JournalService,
  ) {
  }

  ngOnInit(): void {
    this.adjustEditorSize()

    this.editorSubscription = this.editorSubject.pipe(
      debounceTime(1000)
    ).subscribe(() => {
        this.journalService.updateJournalEntry({
          journalEntry: this.journalService.todayJournalEntry.journalEntry
        })
      }
    )
  }

  ngOnDestroy(): void {
    this.editorSubscription.unsubscribe()
  }

  onWindowResize() {
    this.adjustEditorSize()
  }

  adjustEditorSize() {
    this.editorHeight = window.innerHeight / 2
    this.editorWidth = window.innerWidth
  }
}
