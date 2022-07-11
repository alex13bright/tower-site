import { omit } from 'lodash'

export const unwrapTranslation = (record: any) => {
  if (
    typeof record !== 'object' ||
    !Array.isArray(record?.translations) ||
    record.translations.length !== 1 ||
    typeof record.translations[0] !== 'object'
  )
    return null
  const translation = record.translations[0] as Object

  return { ...omit(record, 'translations'), ...translation }
}
