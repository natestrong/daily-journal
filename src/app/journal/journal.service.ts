import {Journal} from './journal.model'

export class JournalService {
  private _journalHistory: Journal[] = []

  setTempDates() {
    const todayDate = new Date()
    const date2 = new Date(new Date().setDate(new Date().getDate() - 1))
    const date3 = new Date(new Date().setDate(new Date().getDate() - 2))
    const date4 = new Date(new Date().setDate(new Date().getDate() - 5))
    const date5 = new Date(new Date().setDate(new Date().getDate() - 7))
    this._journalHistory = [
      {id: '1', date: todayDate, mood: 1},
      {id: '2', date: date2, mood: 5},
      {id: '3', date: date3, mood: 0},
      {id: '4', date: date4, mood: 3},
      {id: '5', date: date5, mood: 4},
    ]
  }

  get journalHistory(): Journal[] {
    return this._journalHistory.slice()
  }
}


