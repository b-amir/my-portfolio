import { cache } from 'react'
import { openDB } from './db'

export const getProject = cache(async (id: string) => {
  const db = await openDB()
  const item = await db.get('SELECT * FROM projects WHERE id = ?', [id])
  return item
})

export const getProjectsSkillTags = cache(async (id: string) => {
  const db = await openDB()
  const items = await db.get('SELECT tags FROM projects WHERE id = ?', [id])
  const parsedItems = JSON.parse(items?.tags)
  return parsedItems
})
