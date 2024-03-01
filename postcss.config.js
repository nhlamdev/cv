module.exports = (env) => {
  return {
    plugins: {
      autoprefixer: {},
      'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nesting',
      tailwindcss: {},
      ...(env.mode === 'production' ? { cssnano: {} } : {})
    }
  }
}
