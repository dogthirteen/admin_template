module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 75,
      selectorBlackList: ['van'],
      propList: ['*']
    }
  }
}
