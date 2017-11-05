// This theme file is based on the styled-components styled system
// https://github.com/jxnblk/styled-system

import palx from 'palx' // Color palette library

// https://github.com/jxnblk/styled-system#breakpoints
export const breakpoints = ['450px', '768px', '1170px', '1440px']

// Units are in ems below
export const space = [0, 4, 8, 16, 32, 64, 128]

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96]

export const weights = [400, 700]

export const radius = 4

export const font = `-apple-system, BlinkMacSystemFont, sans-serif`

export const monospace = '"SF Mono", "Roboto Mono", Menlo, monospace'

const palette = palx('#07c')

const flattened = Object.keys(palette).reduce((a, key) => {
  const value = palette[key]
  if (Array.isArray(value)) {
    a[key] = value[5]
    value.forEach((val, i) => {
      a[key + i] = val
    })
  } else {
    a[key] = value
  }
  return a
}, {})

export const colors = Object.assign({}, flattened, {
  primary: 'rgb(23, 195, 169)',
  active: 'rgb(23, 195, 169)',
  secondary: 'rgb(0, 125, 125)',
  accent1: 'rgb(155, 155, 155)',
  accent2: 'rgb(250, 175, 0)',
  accent3: 'rgb(176, 69, 69)',
  black: 'rgb(77, 77, 77)',
  white: 'rgb(255, 255, 255)',
  lightGray: '#FAFAFA',
  facebook: 'rgb(59, 89, 152)',
  github: 'rgb(0, 0, 0)',
  google: 'rgb(221, 75, 57)',
  twitter: 'rgb(85, 172, 238)',
})

const theme = {
  breakpoints,
  space,
  fontSizes,
  weights,
  font,
  monospace,
  colors,
  radius,
}

export default theme
