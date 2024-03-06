/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'
  const isAnalyze = Boolean(env?.analyze)

  const config = {
    entry: {
      bundle: path.resolve(__dirname, 'src/index.tsx'),
      vendors: [
        'react',
        'react-dom',
        'react-icons',
        'react-redux',
        'react-i18next',
        'i18next',
        '@emotion/react',
        '@emotion/cache'
      ],
      'vendors-core': ['regenerator-runtime'],
      'vendors-ui': ['tw-elements', 'flowbite-react', '@mui/material']
    },
    output: {
      filename: 'js/[name].[contenthash].js', // output
      chunkFilename: 'js/[id].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css'
      }),
      new Dotenv({ path: isProduction ? './.env.production' : './.env.development' }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'public',
            to: '.',
            filter: (name) => {
              return !name.endsWith('index.html')
            }
          }
        ]
      }),
      new ESLintPlugin({
        extensions: ['.tsx', '.ts', '.js', '.jsx']
      })
    ],
    devtool: isProduction ? false : 'source-map',
    mode: env.mode,
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

              return `npm.${packageName.replace('@', '')}`
            },
            chunks: 'all',
            reuseExistingChunk: true,
            idHint: 'vendors'
          },
          'vendors-core': {
            test: /core-js|regenerator-runtime/,
            name: 'vendors-core',
            chunks: 'all',
            enforce: true
          },
          'vendors-ui': {
            test: /@material|antd|react-bootstrap/, // thay thế với các thư viện UI của bạn
            name: 'vendors-ui',
            chunks: 'all',
            enforce: true
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      },
      minSize: 20000,
      minimizer: [new TerserPlugin()],
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      flagIncludedChunks: true,
      enforceSizeThreshold: 50000,
      minimize: true,
      realContentHash: true,
      removeEmptyChunks: true
    },
    module: {
      rules: [
        {
          test: /\.(ts)x?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: path.resolve(__dirname, 'dist/css/')
              }
            },
            {
              loader: 'css-loader',
              options: { sourceMap: !isProduction }
            },
            {
              loader: 'sass-loader', // biên dịch sass sang css
              options: { sourceMap: !isProduction }
            },
            'postcss-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|wav|ico)$/i,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: 'assets/fonts'
            }
          }
        },
        {
          test: /\.(png|jpe?g|gif|)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[contenthash].[ext]',
                outputPath: 'assets/imgs'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                  enabled: false
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4
                },
                gifsicle: {
                  interlaced: false
                },
                webp: {
                  quality: 75
                }
              }
            }
          ]
        },
        {
          test: /\.mp3$/i,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: 'assets/music'
            }
          }
        }
      ]
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      },

      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    devServer: {
      compress: true,
      hot: true,
      open: true,
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, 'public'),
        serveIndex: true,
        watch: true
      },
      watchFiles: {
        paths: ['src/**/*.*'],
        options: {
          usePolling: true
        }
      }
    }
  }

  if (isProduction) {
    config.plugins = [
      ...config.plugins,
      new webpack.ProgressPlugin(),

      new CompressionPlugin({
        test: /\.(css|js)$/,
        algorithm: 'brotliCompress'
      }),
      new CleanWebpackPlugin()
    ]
    if (isAnalyze) {
      config.plugins = [...config.plugins, new BundleAnalyzerPlugin()]
    }
    config.optimization = {
      minimizer: [`...`, new CssMinimizerPlugin()]
    }
  }

  return config
}
