import { JSDOM } from 'jsdom'
import { TocModeType, TocType } from '~/core/types'
import { slugify } from '~/core/singletons'
import { fakeUse } from '~/core/utils'

export const extractToc = (content: string, tocMode: TocModeType): TocType => {
  fakeUse(tocMode)
  const root = JSDOM.fragment(`<div>${content}</div>`)
  const tags = root.querySelectorAll('h2')
  return [...tags].map(({ innerHTML: title }) => ({ title, id: slugify(title) }))
}
