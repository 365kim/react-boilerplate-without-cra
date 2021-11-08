const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const getConfig = ({ isDev, isAnalyzeMode }) => ({
  mode: isDev ? 'development' : 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    main: './src/index',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.[name].[chunkhash].js',
    chunkFilename: 'chunk.[name].[chunkhash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        // exclude: [/[\\/]images[\\/]prefix1.*/, /[\\/]images[\\/]prefix2.*/],
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      // {
      //   test: /.png$/i,
      //   include: [/[\\/]images[\\/]prefix1.*/, /[\\/]images[\\/]prefix2.*/],
      //   type: 'asset/inline',
      // },
      {
        test: /\.svg$/i,
        type: 'asset/inline',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', { targets: { esmodules: true } }], '@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(process.env.npm_package_version),
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // favicon: './src/assets/images/favicon.png',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'src/manifest.json'),
          to: path.join(__dirname, 'dist'),
          transform: (content) =>
            Buffer.from(
              JSON.stringify({
                version: process.env.npm_package_version,
                ...JSON.parse(content.toString('utf-8')),
              })
            ),
        },
      ],
    }),
    new ImageMinimizerPlugin({
      test: /prefix3.*\.png$/i,
      deleteOriginalAssets: false,
      filename: '/images/[name].webp',
      minimizerOptions: {
        plugins: ['imagemin-webp'],
      },
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$/,
    }),
    isAnalyzeMode &&
      new BundleAnalyzerPlugin({
        generateStatsFile: true,
        statsFilename: 'bundle-stats.json',
      }),
  ].filter(Boolean),
  devServer: {
    port: 9000,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](?!.core-js|babel-runtime).*[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
});

module.exports = (env, argv) => {
  const config = getConfig({
    isDev: argv.mode === 'development',
    isAnalyzeMode: env.bundleAnalyze,
  });

  return config;
};
