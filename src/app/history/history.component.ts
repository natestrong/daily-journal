import {Component, OnInit} from '@angular/core';
import {JournalService} from '../journal/journal.service'
import {MatTableDataSource} from '@angular/material/table'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['date', 'id', 'mood']
  dataSource = new MatTableDataSource()

  constructor(private journalService: JournalService) {
  }

  ngOnInit() {
  }
}
