var path = require('path'),
    //webpack = require('webpack'),
    autoprefixer = require('autoprefixer');

module.exports = {
    context: __dirname,
    entry: {
        '_pack_onload_styles': './ui/bundle_def/on_load_scss.js',
        // Add additional packs that are distinct from the application (e.g. 3rd party lib pack)

        '_bones_app': './ui/start.js'
        // Add additional bundles beyond application core
    },
    output: {
        path: './bundle/',
        filename: '[name].js'
    },
    plugins: [
        // Include additional build plugins...
    ],
    module: {
        loaders: [{
            test: /\.js(x)?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        },{
            test: /\.(png|jpg)$/,
            loader: 'url-loader?name=_img-[hash].[ext]'
        },{
            test: /\.scss$/,
            loader: 'style-loader!css-loader?sourceMap!postcss-loader?browser=last 2 version!sass-loader?sourceMap'
        },{
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&minetype=application/font-woff&name=_font-[hash].[ext]'
        },{
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader?name=_font-[hash].[ext]'
        },{
            test: /\.dot$/,
            loader: 'dot-loader'
        }]
    },
    postcss: function () {
        return [autoprefixer];
    },
    resolve: {
        root: __dirname,
        modulesDirectories: ['node_modules', 'libs'],
        extensions: ['', '.js', '.scss'],
        alias: {
            'mousetrap': path.join(__dirname, 'libs/mousetrap.js'), // https://craig.is/killing/mice
            'draggabilly': path.join(__dirname, 'libs/draggabilly.js'), // http://draggabilly.desandro.com/
            'jquery-color': path.join(__dirname, 'libs/jquery.color.js') // https://github.com/jquery/jquery-color
        }
    },
    externals: {
        jquery: 'jQuery'
    }
    // node: {
    //     fs: 'empty' // https://github.com/webpack/jade-loader/issues/8
    // }
};
