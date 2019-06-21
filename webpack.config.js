const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),

  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
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
  resolve: { alias: { vue: 'vue/dist/vue.esm.js' } },
  stats: {
    colors: true
  },
  devtool: 'source-map'
}
