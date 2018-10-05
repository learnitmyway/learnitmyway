module.exports = ctx => {
  return {
    map: ctx.env === 'production' ? false : ctx.options.map, // source maps
    plugins: {
      "postcss-import": {},
      "postcss-cssnext": {},
      "cssnano": ctx.env === 'production' ? {autoprefixer: false} : false
    }
  }
};
