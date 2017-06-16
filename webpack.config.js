module.exports = {
  entry: "./src/frontend/horizonApp.js",
  output: {
    path: __dirname + "/src/frontend",
    filename: "bundle.js"
  },
  module: {
    loaders: [
        {
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }
    ]
  },
  watch: true
};
