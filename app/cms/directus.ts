import { Directus } from '@directus/sdk'
import { directusUrl, directusStaticToken } from 'app.config'
import { Schema } from './schema'

const directus = new Directus<Schema>(directusUrl)

export async function getDirectusClient() {
  if (await directus.auth.token) return directus

  if (!directusStaticToken) throw new Error('directusStaticToken is not found in app.config')
  await directus.auth.static(directusStaticToken)

  return directus
}
