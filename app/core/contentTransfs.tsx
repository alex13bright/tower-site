import { renderToString } from 'react-dom/server'
import { BonusFeed } from '~/components/common/BonusFeed'
import jsdom from 'jsdom'
import { RoomType } from '~/core/types'
import { ServerStyleSheet } from 'styled-components'
const { JSDOM } = jsdom

export const extendContent = async (rawContent: string, room: RoomType): Promise<string> => {
  const _now = Date.now()

  const sheet = new ServerStyleSheet()
  let markup = renderToString(sheet.collectStyles(<BonusFeed room={room} />))
  const styles = sheet.getStyleTags()
  const cmdId = 'cms'
  const root = JSDOM.fragment(`<div id=${cmdId}>${rawContent}</div>`)
  console.log(styles)
  const injections = root.querySelectorAll('h6')
  injections.forEach((injection) => {
    const [type, paramsStr] = injection.innerHTML.split('#')
    const params = paramsStr ? paramsStr.split(',') : []
    switch (type) {
      case 'bonus': {
        injection.outerHTML = `<div>
            ${styles}
            ${markup}
        </div>`
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
