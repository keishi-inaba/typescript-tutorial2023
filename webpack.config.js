module.exports = {
  entry: { // エントリーポイント設定
    bundle: "./src/index.ts",
  },
  output: { // 出力先の設定
    path: `${__dirname}/dist`,
    filename: "[name].js", // [name]はentryで記述した名前が入る
  },
  mode: "production", // production(本番環境) から選択,development（開発環境） に設定するとソースマップが有効になる
  resolve: {
    extensions: [".ts", ".js"], // ファイル拡張子設定と拡張子を書かずに名前設定ができる
  },
  devServer: {
    static: {
      directory: `${__dirname}/dist`,
    },
    open: true,
  },
  module: { // モジュールに適応するルールの設定
    rules: [
      {
        test: /\.ts$/, // 拡張子が .ts のファイルに対してTypeScriptをコンパイル
        loader: "ts-loader",
      },
    ],
  },
};
