import {Component, OnInit} from '@angular/core';
import {JournalService} from '../journal/journal.service'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private journalService: JournalService) {
  }

  ngOnInit() {
    this.journalService.setTempDates()
    console.log(this.journalService.journalHistory)
  }
}
