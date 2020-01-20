import {Journal} from './journal.model'

export class JournalService {
  private _journalHistory: Journal[]

  get journalHistory(): Journal[] {
    return this._journalHistory
  }

  set journalHistory(value: Journal[]) {
    this._journalHistory = value
  }
}


