import * as CleanWebpackPlugin from 'clean-webpack-plugin'
import * as CopyWebpackPlugin from 'copy-webpack-plugin'
import * as path from 'path'
import * as webpack from 'webpack'

const config: webpack.Configuration = {
  mode: 'production',

  entry: './src/app/index.ts',

  output: {
    filename: 'index.js',
    path: path.join(__dirname, './dist/trash')
  },

  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src/app')
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        loader: 'awesome-typescript-loader',
        test: /\.tsx?$/
      }
    ]
  },

  plugins: [
    new webpack.IgnorePlugin(/(clock|document|heart-rate|user-activity)/),
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: './src/app', to: '../fitbit/app' },
      { from: './src/companion', to: '../fitbit/companiion' },
      { from : './src/resources', to: '../fitbit/resources' },
      { from : './package.json', to: '../fitbit' }
    ])
  ]
}

export default config
