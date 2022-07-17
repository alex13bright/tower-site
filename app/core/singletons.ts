import slugifyModule from 'slugify'
export const slugify = (string: string) =>
  slugifyModule(string, {
    replacement: '-', // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: false, // strip special characters except replacement, defaults to `false`
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
    locale: 'en', // language code of the locale to use
  })
