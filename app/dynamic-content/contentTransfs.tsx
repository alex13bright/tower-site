import { replaceAll } from '~/lib/utilities'
import * as fs from 'fs'
import { tagsToJsxMap } from '~/dynamic-content/tagsToJsxMap'

export const replaceTagsWithJsx = (content: string): string =>
  Object.entries(tagsToJsxMap).reduce((content, [tag, jsx]) => {
    content = replaceAll(content, `<${tag}`, `<${jsx.displayName}`)
    content = replaceAll(content, `</${tag}>`, `</${jsx.displayName}>`)
    return content
  }, content)

export const transformContent = (content: string): string => {
  const transformedContent = replaceTagsWithJsx(content)
  fs.writeFileSync(`${process.cwd()}/_log.transformedContent.txt`, transformedContent)
  return transformedContent
}

/*
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

if (root.firstChild === null) throw new Error('extractToc error')
// @ts-ignore
return root.firstChild.innerHTML
*/
