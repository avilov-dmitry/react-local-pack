import path from 'path';
import 'webpack-dev-server';

const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
    mode: isDevelopment ? 'development' : 'production',
    entry: {
        main: path.resolve(__dirname, 'source/index.ts'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                type: 'asset/resource',
            },
            { test: /\.tsx?$/, loader: 'ts-loader' },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'file-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devtool: false,
    devServer: {
        port: 4000,
        historyApiFallback: true,
        hot: 'only',
        https: false,
    },
};

export default config;
