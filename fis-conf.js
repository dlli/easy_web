fis.hook('relative');

fis.match('**', { relative: true });

fis.match('::package', {
  spriter: fis.plugin('csssprites')
});
// png图片压缩
fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});
// npm install -g fis-parser-less-2.x
fis.match('css/less/prj.less', {
    rExt: '.css', // from .less to .css
    parser: fis.plugin('less-2.x', {
        // fis-parser-less-2.x option
    }),
    optimizer: fis.plugin('clean-css',{
      //option
   }),
    useHash:true,
    useSprite:true
});
// 压缩依赖JS
fis.match('js/lib/*.js',{
    useHash:true,
    optimizer:fis.plugin('uglify-js',{
        
    })
});
// 设置成 js/plugin/*.js 只压缩插件目录
fis.match('js/plugin/*.{js,jsx,ts,tsx,es6,es}', {
  // 指定压缩插件 fis-optimizer-uglify-js 
  /*optimizer: fis.plugin('uglify-js', {
    // option of uglify-js
  }),*/
  packTo: 'js/plugin/plugin.js'
});

