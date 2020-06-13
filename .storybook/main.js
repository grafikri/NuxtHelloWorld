const path = require('path')

module.exports = {
  stories: ["../components/**/*.stories.[tj]s"],


  addons: ['@storybook/addon-viewport/register'],


  /**
   * Kendi webpack configurasyonlarımızı düzenliyoruz
   */
  webpackFinal: async (config, { configType }) => {

    /**
     * Sass dosyalarının css'e dönüştürülmesi
     */
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', {
        loader: 'sass-loader',
        options: {
          prependData: "@import 'assets/scss/app_variables.scss';"
        }
      }],
      include: path.resolve(__dirname, '../'),
    })

    /**
     * Hızlı dosya yükleme için alias
     */
    config.resolve.alias = {
      ...config.resolve.alias, '~': path.resolve(__dirname, '../')
    }

    return config
  },
}
