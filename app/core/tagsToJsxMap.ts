import { P, H1, H2, H3 } from '~/components/dynamic-content/tags/tags'
import { Table } from '~/components/dynamic-content/tags/Table'
import { Anchor } from '~/components/dynamic-content/tags/Anchor'
import { Image } from '~/components/dynamic-content/tags/Image'
import { Injection } from '~/components/dynamic-content/tags/Injection'
import { UnorderedList } from '~/components/dynamic-content/tags/UnorderedList'

export const tagsToJsxMap = {
  p: P,
  h1: H1,
  h2: H2,
  h3: H3,
  ul: UnorderedList,
  a: Anchor,
  table: Table,
  img: Image,
  h6: Injection,
}
