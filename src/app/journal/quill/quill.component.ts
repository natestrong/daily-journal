import {Component, OnInit} from '@angular/core';
import {JournalService} from '../journal.service'

@Component({
  selector: 'app-quill',
  templateUrl: './quill.component.html',
  styleUrls: ['./quill.component.scss']
})
export class QuillComponent implements OnInit {

  constructor(
    public journalService: JournalService,
  ) {
  }

  ngOnInit(): void {
  }

}
