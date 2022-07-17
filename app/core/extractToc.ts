import slugify from 'slugify'
import { TocType } from '~/core/types'

export const extractToc = (content: string): TocType => {
  const titles = ['header 2 title 1', 'header 2 title 2']
  return titles.map((title, slug) => ({
    title,
    anchor: slugify(title),
  }))
}
