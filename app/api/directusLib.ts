import { omit } from 'lodash'

export type EmptyField = undefined | null
export type Field = string | number | EmptyField
export type Ref<Item> = Item | Field
export type Refs<Item> = Item[] | Field

export const isItem = <Item>(ref: Ref<Item>): ref is Item => typeof ref === 'object' && ref !== null

export const unwrapTranslation = <Item>(item: Item) => {
  if (isItem(item)) return null
  if (
    typeof item !== 'object' ||
    !Array.isArray(item?.translations) ||
    item.translations.length !== 1 ||
    typeof item.translations[0] !== 'object'
  )
    return null
  const translation = item.translations[0] as Object

  return { ...omit(item, 'translations'), ...translation }
}
