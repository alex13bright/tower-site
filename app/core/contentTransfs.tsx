import { renderToString } from 'react-dom/server'
import { BonusFeed } from '~/components/common/BonusFeed'
import jsdom from 'jsdom'
import { ServerStyleSheet } from 'styled-components'
import * as fs from 'fs'
import { replaceAll } from '~/lib/utilities'
const { JSDOM } = jsdom

const replaces = {
  p: 'P',
  h1: 'H1',
  h2: 'H2',
  h3: 'H3',
  h4: 'H4',
  ul: 'UL',
  li: 'LI',
  a: 'A',
  table: 'Table',
  // tbody: 'TBody',
  // th: 'TH',
  // tr: 'TR',
  // td: 'TD',
  img: 'Img',
  h6: 'Injection',
}
export const convertToJsx = (content: string): string => {
  Object.entries(replaces).forEach(([tag, jsx]) => {
    content = replaceAll(content, `<${tag}`, `<${jsx}`)
    content = replaceAll(content, `</${tag}>`, `</${jsx}>`)
  })
  // fs.writeFileSync(`${process.cwd()}/_log.content.txt`, content)
  return content
}

export const extendContent = async (rawContent: string): Promise<string> => {
  const _now = Date.now()

  const cmdId = 'cms'
  const root = JSDOM.fragment(`<div id=${cmdId} style="display: grid">${rawContent}</div>`)

  const injections = root.querySelectorAll('h6')
  injections.forEach((injection) => {
    const [type, paramsStr] = injection.innerHTML.split('#')
    const params = paramsStr ? paramsStr.split(',') : []
    switch (type) {
      case 'bonus': {
        const sheet = new ServerStyleSheet()
        let markup = renderToString(sheet.collectStyles(<BonusFeed />))
        const styles = sheet.getStyleTags()
        fs.writeFileSync(`${process.cwd()}/_log.styles.html`, styles)
        sheet.seal()
        injection.outerHTML = `<Bonus>${styles}${markup}</Bonus>`
      }
    }
  })

  const tables = root.querySelectorAll('table')
  tables.forEach((table) => {
    const firstTr = table.querySelector('tr')
    if (firstTr == null) throw new Error('content is null')
    const tds = firstTr.querySelectorAll('td')
    if (tds == null) throw new Error('content is null')
    table.setAttribute('style', `--cols: ${tds.length}`)
  })
  if (root.firstChild === null) throw new Error('content is null')
  console.log(Date.now() - _now)
  // @ts-ignore
  return root.firstChild.outerHTML
}
