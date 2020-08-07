const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')

const devConfig = merge(baseConfig, {

    mode: 'development',

    devServer: {
        overlay: true,
    }
})

module.exports = new Promise((resolve, reject) => {
    resolve(devConfig)
})