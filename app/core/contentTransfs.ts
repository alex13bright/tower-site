import jsdom from 'jsdom'
const { JSDOM } = jsdom

export const extendContent = async (rawContent: string): Promise<string> => {
  const cmdId = 'tinymce'
  const root = JSDOM.fragment(`<div id=${cmdId}>${rawContent}</div>`)
  const divs = root.querySelectorAll('div')
  divs.forEach((div) => {
    const inlineStyle = div.getAttribute('style')
    const style = inlineStyle ? inlineStyle : ''
    div.setAttribute('style', style + ` display: grid;`)
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
  // @ts-ignore
  return root.firstChild.outerHTML
}
