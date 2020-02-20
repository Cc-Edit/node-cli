exports.home = function* (ctx) {

  // {app_root}/app/view/vue-ssr-server-bundle.json
  yield ctx.render('vue-ssr-server-bundle.json', { name: 'vue json render' });

};