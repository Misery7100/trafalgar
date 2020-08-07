const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

// consts
const PATHS = {
    src: path.join(__dirname, "../src"), 
    dist: path.join(__dirname, "../dist")
}
const PAGES_DIR = `${PATHS.src}/landing`

const LANDING = fs
    .readdirSync(PAGES_DIR)
    .filter(fileName => fileName.endsWith('.pug'))

// -------------
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
            {   // Pug
                test: /\.pug$/,
                use: [
                    'pug-loader',
                    {
                        loader: 'pug-bem-plain-loader',
                        options: {b: 'block-', m: '--'}
                    }
                ]
            },

            {   // CSS
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    }
                ]
            },

            {   // SASS
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    }
                ]
            },

            {   // JavaScript
                test: /\.js$/,
                exclude: /node_modules/,
                use: {loader: 'babel-loader'}
            },

            {   // Fonts
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {name: '[name].[ext]'}
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
        }),

        new FaviconsWebpackPlugin({
            logo: `${PATHS.src}/assets/favicon/favicon.png`
        })
    
    ]
}