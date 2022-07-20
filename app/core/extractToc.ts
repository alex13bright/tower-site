import { JSDOM } from 'jsdom'

import { TocModeType, TocType } from '~/core/types'
import { slugify } from '~/core/singletons'

export const extractToc = (content: string, tocMode: TocModeType): TocType => {
  const root = JSDOM.fragment(`<div>${content}</div>`)
  const tags = root.querySelectorAll('h2')
  return [...tags].map(({ innerHTML }) => ({ title: innerHTML, id: slugify(innerHTML) }))
}
