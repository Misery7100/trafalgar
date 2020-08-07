const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require("html-webpack-plugin")

//const MiniCssExtractPlugin = require("mini-css-extract-plugin")

// consts
const PATHS = {
    src: path.join(__dirname, "/src"), 
    dist: path.join(__dirname, "/dist")
}
const PAGES_DIR = `${PATHS.src}`
// const LANDING = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith(".pug"));
const LANDING = fs
    .readdirSync(PAGES_DIR)
    .filter(fileName => fileName.endsWith('.pug'))

console.log(LANDING);

module.exports = {

    entry: {
        app: `${PATHS.src}/index.js`
    },

    output: {
        path: PATHS.dist,
        //publicPath: '/dist',
        filename: 'main.js'
    },

    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    'pug-loader',
                    {
                        loader: 'pug-bem-plain-loader',
                        options: {b: 'block', m: '--'}
                    }
                    //{loader: 'pug-loader'}
                ]
            }

        ]
    },
    plugins: [

        ...LANDING.map(page => new HtmlWebpackPlugin({
            filename: `./${page.replace(/\.pug/, '.html')}`,
            template: `${PAGES_DIR}/${page}` 
        }))
        


    ]
}