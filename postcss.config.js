module.exports = ctx => ({
  map: ctx.options.map,
  plugins: {
    "postcss-import": {},
    "postcss-cssnext": {},
    "cssnano": ctx.env === 'production' ? {autoprefixer: false} : false
  }
});
