// @ts-ignore
import { JSDOM } from 'jsdom'

import { TocModeType, TocType } from '~/core/types'
import { slugify } from '~/core/singletons'

export const extractToc = (content: string, tocMode: TocModeType): TocType => {
  const root = JSDOM.fragment(`<div>${content}</div>`)
  const titles: { title: string; slug: string | null }[] = []
  const tags: HTMLElement[] = root.querySelectorAll('h2')
  tags.forEach((tag) => {
    const title = tag.innerHTML
    const slug = null
    titles.push({ title, slug })
  })

  const toc = titles.map(({ title, slug }) => ({
    title,
    id: slug !== null ? slug : `${slugify(title)}`,
  }))

  return toc
}
