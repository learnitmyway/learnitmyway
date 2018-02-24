module.exports = ctx => ({
  map: ctx.options.map,
  plugins: {
    "postcss-import": {},
    "postcss-cssnext": {},
    cssnano: {
      autoprefixer: false
    }
  }
});
