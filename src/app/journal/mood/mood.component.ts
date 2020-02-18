import {Component, Input, OnInit} from '@angular/core';
import {JournalService} from '../journal.service'

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.scss'],
})
export class MoodComponent implements OnInit {
  @Input() mood

  constructor(
    public journalService: JournalService
  ) {
  }

  ngOnInit() {
  }

  onMoodLevelChange(value) {
    this.mood = value
    this.journalService.updateJournalEntry({mood: this.mood})
  }
}
