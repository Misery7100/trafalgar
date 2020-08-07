const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

// consts
const PATHS = {
    src: path.join(__dirname, "../src"), 
    dist: path.join(__dirname, "../dist")
}
const PAGES_DIR = `${PATHS.src}/landing`
// const LANDING = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith(".pug"));
const LANDING = fs
    .readdirSync(PAGES_DIR)
    .filter(fileName => fileName.endsWith('.pug'))

console.log(LANDING);

module.exports = {

    externals: {
        paths: PATHS
    },

    entry: {
        app: `${PATHS.src}/index.js`
    },

    output: {
        path: PATHS.dist,
        //publicPath: '/dist',
        filename: 'main.js'
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
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    }
                ]
            }

        ]
    },
    plugins: [

        ...LANDING.map(page => new HtmlWebpackPlugin({
            filename: `./${page.replace(/\.pug/, '.html')}`,
            template: `${PAGES_DIR}/${page}` 
        })),

        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    
    ]
}