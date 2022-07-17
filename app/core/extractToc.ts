import { TocType } from '~/core/types'
import { slugify } from '~/core/singletons'

export const extractToc = (content: string): TocType => {
  const titles = ['header 2 title 1', 'header 2 title 2']
  const toc = titles.map((title) => ({
    title,
    anchor: `#${slugify(title)}`,
  }))
  return toc
}
