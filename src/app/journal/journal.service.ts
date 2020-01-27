import {Journal} from './journal.model'
import {Injectable} from '@angular/core'
import {AngularFirestore} from '@angular/fire/firestore'
import {AuthService} from '../auth/auth.service'
import {Subject} from 'rxjs'

@Injectable()
export class JournalService {
  private _todayJournalEntry: Journal = {
    journalEntry: '',
    mood: 0,
    id: '',
    dateUpdated: null
  }
  private fsJournalCollectionPath: string
  private todayDateId: string
  public todayJournalEntryUpdated = new Subject()

  constructor(
    private db: AngularFirestore,
    private authService: AuthService
  ) {
  }

  fsGetTodayJournal() {
    this.fsJournalCollectionPath = `users/${this.authService.fbUser.uid}/journalEntries`
    this.todayDateId = new Date().toLocaleDateString().replace(/\//g, '.')


    this.db.collection(`users/${this.authService.fbUser.uid}/journalEntries`)
    .doc(this.todayDateId)
    .valueChanges()
    .subscribe(doc => {
      if (doc) {
        this._todayJournalEntry = {...doc}
        console.log(this.todayJournalEntry)
        this.todayJournalEntryUpdated.next()
      } else {
        this.createJournalForToday(this.todayDateId)
      }
    })
  }

  private createJournalForToday(todayDateId) {
    const journalEntry = {
      id: todayDateId,
      dateUpdated: new Date(),
      mood: 0,
      journalEntry: ''
    }
    this.db.collection(this.fsJournalCollectionPath).doc(todayDateId).set(journalEntry)
  }

  get todayJournalEntry(): Journal {
    return this._todayJournalEntry
  }

  set todayJournalEntry(value: Journal) {
    this.db.collection(this.fsJournalCollectionPath).doc(this.todayDateId).update(value)
  }

  public updateJournalEntry(data) {
    this.db.collection(this.fsJournalCollectionPath).doc(this.todayDateId).update(data)
  }
}


