import {Journal} from './journal.model'
import {Injectable} from '@angular/core'
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable()
export class JournalService {
  private _todayJournalEntry: Journal

  constructor(
    private db: AngularFirestore
  ) {
  }

  get todayJournalEntry(): Journal {
    return this._todayJournalEntry
  }

  set todayJournalEntry(value: Journal) {
    this._todayJournalEntry = value
  }
}


