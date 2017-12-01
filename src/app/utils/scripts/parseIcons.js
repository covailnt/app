// https://github.com/pricelinelabs/design-system/blob/83ba8c7ecce55157bdcbdef1e42a01b9810c24b3/scripts/parse-icons.js

const fs = require('fs')
const path = require('path')
const SVGI = require('svgi')
const camelCase = require('camelcase')

const src = path.join(__dirname, '../../../static/images/icons')
const filepath = path.join(__dirname, '../../theme/icons.json')

console.log('src', src, 'filepath', filepath)

const writeFile = data => {
  const json = JSON.stringify(data)
  fs.writeFileSync(filepath, json)
}

const readIcons = dir =>
  fs
    .readdirSync(dir)
    .filter(file => /\.svg$/.test(file))
    .map(file => {
      const name = path.basename(file, '.svg')
      const key = camelCase(removePrefix(name))
      const svg = fs.readFileSync(path.join(src, file), 'utf8')

      return {
        key,
        svg,
      }
    })

const parseSVG = svg => {
  const { nodes } = new SVGI(svg).report()
  const path = getPath(nodes)
  const viewBox = getViewBox(nodes)

  return {
    viewBox,
    path,
  }
}

const flattenChildren = (a, b) => {
  const children = b.children.reduce(flattenChildren, [])
  return [...a, b, ...children]
}

const getPath = nodes =>
  nodes.children
    .reduce(flattenChildren, [])
    .filter(child => child.type === 'path')
    .map(child => child.properties.d)
    .join(' ')

const getViewBox = nodes => nodes.properties.viewBox

const removePrefix = str => str.replace(/^ic-/, '')

const getData = icons =>
  icons.map(icon => Object.assign({}, icon, parseSVG(icon.svg)))

const build = () => {
  const icons = readIcons(src)
  const data = getData(icons).reduce(
    (a, { key, svg, viewBox, path }) =>
      Object.assign({}, a, {
        [key]: {
          viewBox,
          path,
        },
      }),
    {},
  )
  writeFile(data)
}

build()
