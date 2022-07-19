// $& means the whole matched string
const escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export const replaceAll = (str: string, find: string, replace: string): string =>
  str.replace(new RegExp(escapeRegExp(find), 'g'), replace)
