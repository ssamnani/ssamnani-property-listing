const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withCSS = require('@zeit/next-css')

module.exports = withPlugins([
    [withImages],
    [withCSS({
        webpack: function (config) {
            config.module.rules.push({
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: '[name].[ext]'
                    }
                }
            })
            return config
        }
    })],
]);
