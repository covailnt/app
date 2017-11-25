import { breakpoints } from '~/theme'

export const px = n => (num(n) ? n + 'px' : n)
export const em = n => (num(n) ? n + 'em' : n)

export const mq = n => `@media screen and (min-width: ${em(n)})`
export const breaks = () => [null, ...breakpoints.map(mq)]

export const arr = n => (Array.isArray(n) ? n : [n])
export const is = n => n !== undefined && n !== null
export const neg = n => n < 0
export const num = n => typeof n === 'number' && !isNaN(n)

export const dec = props => val =>
  arr(props).reduce((acc, prop) => ((acc[prop] = val), acc), {})

export const media = bp => (d, i) =>
  is(d) ? (bp[i] ? { [bp[i]]: d } : d) : null

export const merge = (a, b) =>
  Object.assign(
    {},
    a,
    b,
    Object.keys(b).reduce(
      (obj, key) =>
        Object.assign(obj, {
          [key]:
            a[key] !== null && typeof a[key] === 'object'
              ? merge(a[key], b[key])
              : b[key],
        }),
      {},
    ),
  )

// ====================================================================
export const get = (obj, path, fallback) =>
  path.split('.').reduce((a, b) => (a && a[b] ? a[b] : null), obj) || fallback

// keeping for backwards-compatibility only
export const idx = (keys, obj) => get(obj, keys.join('.')) || null
