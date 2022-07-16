import { JSDOM } from 'jsdom'
import { replaceAll } from '~/lib/utilities'
import * as fs from 'fs'

const tagsToJsxMap = {
  p: 'P',
  h1: 'H1',
  h2: 'H2',
  h3: 'H3',
  ul: 'UL',
  li: 'LI',
  a: 'A',
  table: 'Table',
  img: 'Img',
  h6: 'Injection',
}
export const replaceTagsWithJsx = (content: string): string =>
  Object.entries(tagsToJsxMap).reduce((content, [tag, jsx]) => {
    content = replaceAll(content, `<${tag}`, `<${jsx}`)
    content = replaceAll(content, `</${tag}>`, `</${jsx}>`)
    return content
  }, content)

const preprocessDom = (content: string): string => {
  const root = JSDOM.fragment(`<div>${content}</div>`)

  // table content to data attribute
  const tableTags = root.querySelectorAll('table')
  tableTags.forEach((tableTag) => {
    const captionTag = tableTag.querySelector('caption')
    const caption = captionTag !== null ? captionTag.innerHTML : null
    const tbodyTag = tableTag.querySelector('tbody')
    if (tbodyTag === null) throw new Error('table without tbody')
    const trTags = tableTag.querySelectorAll('tr')
    const table: string[][] = []
    trTags.forEach((tr) => {
      const tds = tr.querySelectorAll('td')
      const trData: string[] = []
      table.push(trData)
      tds.forEach((td) => {
        trData.push(td.innerHTML)
      })
    })
    tableTag.setAttribute('data', JSON.stringify({ table, caption }))
  })
  if (root.firstChild === null) throw new Error('content is null')
  // @ts-ignore
  return root.firstChild.innerHTML
}

export const transformContent = (content: string): string => {
  // const processed = replaceTagsWithJsx(preprocessDom(content))
  const processed = replaceTagsWithJsx(content)
  fs.writeFileSync(`${process.cwd()}/_log.processed.txt`, processed)
  return processed
}
