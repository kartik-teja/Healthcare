import { resolve as _resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const entry = './src/index.js';
export const output = {
    // eslint-disable-next-line no-undef
    path: _resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
};
export const resolve = {
    extensions: ['.js', '.jsx'],
};
export const module = {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
    ],
};
export const plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
];
