import jsdom from 'jsdom'
import { replaceAll } from '~/lib/utilities'
const { JSDOM } = jsdom

const tagsToJsxMap = {
  p: 'P',
  h1: 'H1',
  h2: 'H2',
  h3: 'H3',
  h4: 'H4',
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
  const root = JSDOM.fragment(content)

  // table content to attribute
  const tables = root.querySelectorAll('table')
  tables.forEach((table) => {
    const tbody = table.querySelector('tbody')
    if (tbody === null) throw new Error('table without tbody')
    const trs = table.querySelectorAll('tr')
    const tableData: string[][] = []
    trs.forEach((tr) => {
      const tds = tr.querySelectorAll('td')
      const trData: string[] = []
      tableData.push(trData)
      tds.forEach((td) => {
        trData.push(td.innerHTML)
      })
    })
    table.setAttribute('data', JSON.stringify(tableData))
  })
  if (root.firstChild === null) throw new Error('content is null')

  // @ts-ignore
  return root.firstChild.outerHTML
}

export const transformContent = (content: string): string =>
  replaceTagsWithJsx(preprocessDom(content))
