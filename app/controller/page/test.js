exports.home = function* (ctx) {
  // {app_root}/app/view/vue-ssr-server-bundle.js
  yield ctx.render('vue-ssr-server-bundle.js', { name: 'vue js bundle render' });
};