const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const baseConfig = {
    entry: path.resolve(__dirname, './migration-to-ts/index.ts'),
    mode: 'development',
     output: {
      path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
     
    },
    module: {
        rules: [
            {
              test: /\.[tj]s$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },   
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './migration-to-ts/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
          patterns: [
              {
                from: path.resolve(__dirname, 'migration-to-ts/assets'),
                to:   path.resolve(__dirname, 'dist/assets')
              }
            ]
          }),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');
    return merge(baseConfig, envConfig);
};
