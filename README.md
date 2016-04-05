# my-angular2-jspm-gulp
my angular2 with jspm and gulp

###jspm@beta

    jspm init
    
Init Mode (Quick, Standard, Custom) [Quick]: Quick<br />
Local package name (recommended, optional): my-jspm-angular2-gulp-express<br />
package.json directories.lib [src]: modules<br />
System.config browser baseURL (optional): /<br />
System.config local package main [my-jspm-angular2-gulp-express.js]: app.js<br />
System.config transpiler (Babel, Traceur, TypeScript, None) [babel]: babel<br />

    jspm install npm:babel-plugin-transform-decorators-legacy

add  babel-plugin-transform-decorators-legacy to jspm.config.js's babelOptions.plugins,

