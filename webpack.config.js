const webpack = require('webpack');


const webpackConfig = {
    entry: ['./src/index.ts'],
    output: {
        filename: './index.js',
    },
    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.js$/,
                use: ['source-map-loader'],
                enforce: 'pre'
            }
        ],
    },
};

webpack(webpackConfig, function (err, stats) {
    if (err) throw err;
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        reasons: true,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
});
