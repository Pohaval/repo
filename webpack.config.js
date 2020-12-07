const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: 
  {
    vendors: [
        
        './app/index.js',
        ]
},
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_boundle.js'
  },
  module: {
    rules: [
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      ]
    }       
  ]
  },  
  plugins: [
    new HtmlWebpackPlugin({
    template: './index.html'
})
]  
}
