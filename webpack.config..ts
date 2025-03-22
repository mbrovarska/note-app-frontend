
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import Foo from './src/App.tsx';

const config = {
  // 1) Webpack mode ("development" or "production")
  mode: 'development',

  // 2) Entry point
  entry: path.resolve(__dirname,'src/index.ts'),

  // 3) Output bundle location
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // In dev, an absolute path is enough. For production, you may want to set a publicPath if hosting on a sub-path.
  },

  // 4) Resolve file extensions
  resolve: {
    extensions: ['.ts', '.tsx', '.js' ],
    mainFields: [ "module"],
    // Optionally define aliases for shorter imports
    // alias: {
    //   '@': path.resolve(__dirname, 'src'),
    // },
  },

  // 5) Module rules
  module: {
    rules: [
      {
        test: /\.tsx?$/,     // or /\.ts(x?)$/
        use: 'ts-loader',    // or babel-loader if you prefer Babel
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,      // optional if you have CSS files
        use: ['style-loader', 'css-loader'],
      },
      // Additional loaders (images, fonts, etc.) can be added here
    ],
  },

  // 6) Development server (optional)
  devServer: {
    static: {
      directory: path.join(__dirname, 'public/index.html'), // or whereverindex.html is
    },
    port: 3000, // choose any port you like
    open: true, // open browser automatically
    hot: true,
        filename: 'bundle.js',
        publicPath: '/',
        historyApiFallback: true,
        contentBase: ['/', '/public'],
        proxy: {
            "*": "http://localhost:3000"
        }
  },

  // 7) Enable source maps (useful for debugging)
  devtool: 'source-map',

  //8) This plugin automatically injects <script src="bundle.js"> into HTML.
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // path to your custom html
    }),
  ],
};

module.exports = config;