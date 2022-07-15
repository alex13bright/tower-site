import { convertToJsx } from './contentTransfs'

test(`getLocaleFromRequest`, () => {
  const res = convertToJsx(`<p>hello</p>`)
  console.log(res)
  // expect(res.toBe('en'))
})
