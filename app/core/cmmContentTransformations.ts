import jsdom from 'jsdom'
const { JSDOM } = jsdom

export const extendContent = async (rawContent: string): Promise<string> => {
  const cmdId = 'cms'
  const withHtml = `<!DOCTYPE html><body><div id=${cmdId}>${rawContent}</div></body>`
  const { document } = new JSDOM(withHtml).window
  const divs = document.querySelectorAll('div')
  divs.forEach((div) => {
    const inlineStyle = div.getAttribute('style')
    const style = inlineStyle ? inlineStyle : ''
    div.setAttribute('style', style + ` display: grid;`)
  })
  const tables = document.querySelectorAll('table')
  tables.forEach((table) => {
    const firstTr = table.querySelector('tr')
    if (firstTr == null) throw new Error('content is null')
    const tds = firstTr.querySelectorAll('td')
    if (tds == null) throw new Error('content is null')
    table.setAttribute('style', `--cols: ${tds.length}`)
  })
  const content = document.getElementById(cmdId)
  if (content === null) throw new Error('content is null')
  return content.outerHTML
}
