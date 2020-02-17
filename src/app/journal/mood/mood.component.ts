import {Component, OnInit} from '@angular/core';
import {JournalService} from '../journal.service'
import {take} from 'rxjs/operators'

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.scss'],
})
export class MoodComponent implements OnInit {
  mood = 0

  constructor(
    public journalService: JournalService
  ) {
  }

  ngOnInit() {
    this.journalService.todayJournalEntryUpdated.pipe(take(1)).subscribe(() => {
      this.mood = this.journalService.todayJournalEntry.mood
    })
  }

  onMoodLevelChange(value) {
    this.mood = value
    this.journalService.updateJournalEntry({mood: this.mood})
  }
}
