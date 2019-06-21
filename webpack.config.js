const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),

  module: {
    rules: [
      // load .Vue files
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // loaders: {
          //   js: 'babel-loader',
          //   options: {
          //     presets: [['env', { modules: 'commonjs' }], 'stage-3']
          //   }
          // },
          // postLoaders: {
          //   js: 'istanbul-instrumenter-loader',
          //   options: { esModules: true, compact: false, debug: true }
          // }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // {
      //   test: /\.js$/,
      //   enforce: 'post',
      //   loader: 'istanbul-instrumenter-loader',
      //   exclude: /node_modules/,
      //   options: { esModules: true, compact: false, debug: true }
      // },
      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    // process HTML
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: path.join(__dirname, 'src/index.template.html')
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    })
  ],
  resolve: {
    alias: { vue: 'vue/dist/vue.esm.js' },
    extensions: ['*', '.js', '.vue', '.json']
  },
  stats: {
    colors: true
  },
  // devtool: 'source-map'
  devtool: '#eval-source-map'
}
