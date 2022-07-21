import { P, H3 } from '~/dynamic-content/components/content'
import { Anchor } from '~/dynamic-content/components/Anchor'
import { Image } from '~/dynamic-content/components/Image'
import { Injection } from '~/dynamic-content/components/Injection'
import { UnorderedList } from '~/dynamic-content/components/UnorderedList'
import { HeadingLevel2 } from '~/dynamic-content/components/HeadingLevel2'

export const tagsToJsxMap = {
  table: Injection,
  p: P,
  h2: HeadingLevel2,
  h3: H3,
  ul: UnorderedList,
  a: Anchor,
  img: Image,
}
