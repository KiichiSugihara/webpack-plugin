// プラグインを利用するためにwebpackを読み込んでおく
const webpack = require('webpack')

// output.pathに指定するパスがOSによって異なることを
// 防ぐためにpathモジュールを読み込んでおく
const path = require('path')

module.exports = {
  // モードの設定（モードを指定しないとwebpack実行時に警告が出る）
  mode: 'development',
  // エントリーポイントの設定
  entry: './src/js/app.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（絶対パスを指定しないとエラーが出るので注意）
    path: path.resolve(__dirname, 'public/js')
  },
  // プラグインの設定
  plugins: [
    // ProvidePlugin を利用する
    new webpack.ProvidePlugin({
      // 外部モジュールであるjqueryを、全てのファイル上で変数$として利用できるようになる
      $: 'jquery'
    })
  ]
}
