const path = require('path')

module.exports = {
  stories: ['../src/components/**/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-interactions'],
  features: {
    interactionsDebugger: true,
  },
  webpackFinal: (baseConfig) => {
    // NOTE: tsconfigのbaseUrlの対応
    baseConfig.resolve.modules = [
      path.resolve(__dirname, '..', 'src'),
      'node_modules',
    ]

    // NOTE: デフォルトではcss modulesは読み込まれないので読み込まれるように設定する
    const cssRule = baseConfig.module.rules.find(
      (rule) => String(rule.test).indexOf('css') !== -1,
    )
    if (!cssRule) return { ...baseConfig }

    // NOTE: 既存のwebpack configの対象から.module.cssファイルを外す
    cssRule.test = /^.*(?<!\.module)\.css$/

    // NOTE: .module.cssファイルのルールを追加する
    baseConfig.module.rules.push({
      test: /\.module\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
      ],
    })

    return { ...baseConfig }
  },
}
