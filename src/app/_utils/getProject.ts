import { cache } from 'react'
import { openDB } from './db'

export const getItem = cache(async (id: string) => {
  const db = await openDB()
  const item = await db.get('SELECT * FROM projects WHERE id = ?', [id])
  return item
})
