const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { css } = require('@webpack-blocks/assets')

const webpack = require('webpack')

const {
  createConfig,
  match,

  // Feature Blocks
  babel,
  devServer,
  file,

  // Shorthand setters
  addPlugins,
  defineConstants,
  entryPoint,
  env,
  resolve,
  setOutput,
  sourceMaps,
} = require('webpack-blocks')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000
const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/')

const sourceDir = process.env.SOURCE || 'src'
const sourcePath = path.join(process.cwd(), sourceDir)
const outputPath = path.join(process.cwd(), 'dist')

function sassLoader() {
  return (context, { merge }) =>
    merge({
      module: {
        rules: [
          Object.assign(
            {
              test: /\.scss$/,
              use: [
                {
                  loader: 'style-loader',
                },
                {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    localIdentName: '[local]-[hash:base64:5]',
                  },
                },
                {
                  loader: 'sass-loader',
                  options: {
                    includePaths: [sourcePath],
                  },
                },
              ],
            },
            context.match,
          ),
        ],
      },
    })
}

const config = createConfig([
  entryPoint(sourcePath),
  setOutput(`${outputPath}/app.js`),
  addPlugins([
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(process.cwd(), 'public/index.html'),
    }),
  ]),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.PUBLIC_PATH': publicPath.replace(/\/$/, ''),
  }),
  babel(),
  sassLoader(),
  css(),
  match(
    [
      '*.gif',
      '*.jpg',
      '*.jpeg',
      '*.png',
      '*.webp',
      '*svg',
      '*woff2',
      '*woff',
      '*ttf',
      '*eot',
    ],
    [file()],
  ),
  resolve({
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  }),
  env('development', [
    devServer({
      contentBase: 'public',
      stats: 'errors-only',
      historyApiFallback: { index: publicPath },
      headers: { 'Access-Control-Allow-Origin': '*' },
      host,
      port,
    }),
    sourceMaps(),
    addPlugins([new webpack.NamedModulesPlugin()]),
  ]),

  env('production', [
    addPlugins([
      new webpack.LoaderOptionsPlugin({ minimize: true }),
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    ]),
  ]),
])

module.exports = config
