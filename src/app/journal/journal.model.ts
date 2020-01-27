export interface Journal {
  id: string
  dateUpdated: Date
  mood: 0 | 1 | 2 | 3 | 4 | 5
  journalEntry: string
}
