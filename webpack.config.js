const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const getConfig = ({ isDev, isAnalyzeMode }) => ({
  mode: isDev ? 'development' : 'production',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      pages: path.resolve(__dirname, 'src/pages/'),
      'styled-system': path.resolve(__dirname, 'src/styledSystem/'),
      atoms: path.resolve(__dirname, 'src/styledSystem/atoms/'),
      molecules: path.resolve(__dirname, 'src/styledSystem/molecules/'),
      templates: path.resolve(__dirname, 'src/styledSystem/templates/'),
      '@styles': path.resolve(__dirname, 'src/styledSystem/@styles/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
      constants: path.resolve(__dirname, 'src/constants/'),
      assets: path.resolve(__dirname, 'src/assets/'),
    },
  },

  entry: {
    main: './src/index.tsx',
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
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.json'),
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', { targets: { esmodules: true } }], '@babel/preset-react'],
        },
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      {
        test: /\.svg$/i,
        type: 'asset/inline',
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
