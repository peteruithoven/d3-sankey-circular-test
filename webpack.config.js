const config = {
  mode: 'production', // "production" | "development" | "none"
  resolve: {
    // .mjs needed for https://github.com/graphql/graphql-js/issues/1272
    extensions: ['*', '.mjs', '.js', '.json']
  },
  module: {
    rules: [
      // fixes https://github.com/graphql/graphql-js/issues/1272
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      }
    ]
  }
}

module.exports = config
