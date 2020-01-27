import {Component, OnInit} from '@angular/core';
import {JournalService} from './journal.service'

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss'],
})
export class JournalComponent implements OnInit {

  constructor(
    public journalService: JournalService
  ) {
  }

  ngOnInit(): void {
    this.journalService.fsGetTodayJournal()
  }

  onJournalUpdated(event) {
    this.journalService.updateJournalEntry({journalEntry: event.html})
  }
}
