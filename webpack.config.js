const path = require(`path`);
const webpack = require(`webpack`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const OptimizeCSSAssetsPlugin = require(`optimize-css-assets-webpack-plugin`);
const TerserPlugin = require(`terser-webpack-plugin`);
module.exports = (env, options) => {
  const isProd = options.mode === `production`;

  const finalCssLoader = isProd
    ? {
      loader: MiniCssExtractPlugin.loader,
      options: { publicPath: `../` },
    } : `style-loader`;

  const styleLoaders = [
    finalCssLoader,
    `css-loader`,
    `sass-loader`,
  ];

  const config = {
    entry: `./src/index.js`,
    output: {
      filename: isProd ? `[name].js` : `[name].js`,
      publicPath: ``,
      path: path.join(__dirname, `public`),
    },
    optimization: {
      splitChunks: {
        name: `vendor`,
        chunks: `all`,
      },
      minimizer: [
        new OptimizeCSSAssetsPlugin({}),
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            ecma: 6,
          },
          chunkFilter: (chunk) => {
            if (chunk.name === `vendor`) {
              return false;
            }

            return true;
          },
        }),
      ],
    },
    plugins: [
      ...[`index`, `clubs`, `club`, `ambassadors`, `ambassador`, `about`, `articles`, `article`, `404`, `wiki`, `search`, `search_empty`].map((event) => {
        return new HtmlWebpackPlugin({
          template: `./src/${event}.html`,
          filename: `${event}.html`,
        });
      }),
      new MiniCssExtractPlugin({
        filename: isProd ? `css/[name].css` : `css/[name].css`,
      }),
    ],
    devtool: `source-map`,
    devServer: {
      contentBase: path.join(__dirname, `src`),
      watchContentBase: true,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: `babel-loader`,
        },
        {
          test: /\.(css|scss)$/,
          use: styleLoaders,
        },
        {
          test: /\.(html)$/,
          use: {
            loader: `html-loader`,
            options: {
              minimize: false,
              attrs: [`:src`, `:data-src`],
            },
          },
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: `file-loader`,
            options: {
              name: `[name].[ext]`,
              outputPath: `fonts/`,
            },
          },
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: {
            loader: `url-loader`,
            options: {
              name: `[name].[ext]`,
              limit: 8192,
              outputPath: `img`,
              mimetype: `image/jpg`,
            },
          },
        },
      ],
    },
  };

  if (!isProd) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return config;
};
