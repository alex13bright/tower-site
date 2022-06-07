import { redirect } from '@remix-run/node'

const throwRedirect = (url: string) => {
  throw redirect(url, { status: 301 })
}

export const permanentRedirect = async (request: Request): Promise<void> => {
  const url = new URL(request.url)
  const hostName = url.hostname
  const subNames = hostName.split('.')
  if (subNames[0] === 'www') {
    subNames.shift()
    url.hostname = subNames.join('.')
    throwRedirect(url.toString())
  }
}
