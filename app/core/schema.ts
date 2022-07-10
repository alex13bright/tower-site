import { ID } from '@directus/sdk'

type Authors_translations = {
  id: ID
  authors_id: ID
  languages_id: ID
  title: string
}
export type Authors = {
  id: ID
  name: string
  translations: Authors_translations
}

export type Schema = {
  authors_translations: Authors_translations
  authors: Authors
}
