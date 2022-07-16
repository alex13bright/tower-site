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
