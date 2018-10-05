module.exports = ctx => {
  return {
    map: ctx.env === 'production' ? false : ctx.options.map, // source maps
    plugins: {
      "postcss-import": {},
      "postcss-preset-env": {
        stage: 0
      },
      "cssnano": ctx.env === 'production' ? {autoprefixer: false} : false
    }
  }
};
