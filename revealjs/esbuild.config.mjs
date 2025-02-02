import * as esbuild from 'esbuild'
import {sassPlugin} from 'esbuild-sass-plugin'

const config = (isProduction) => { return {
  entryPoints: [
    'revealjs.js', 
    'revealjs.scss',
    'theme-black.scss', ],
    bundle: true,
    minify: !!isProduction,
    sourcemap: true,
    loader: {
        ".png": "file",
        ".woff": "file",
        ".woff2": "file",
        ".eot": "file",
        ".ttf": "file",
        ".svg": "file",
        ".jpeg": "file",
        ".jpg": "file",
        ".css": "file"
    },
    plugins: [
      sassPlugin({
        //importMapper: (path) => path.replace(/^~\//, './'),
      }),
    ],
    target: ['chrome58', 'firefox57', 'safari11', 'edge100'],
    outdir: 'dist',
    define: {
      global: 'window',
    },
    format: 'esm'
}};

if(process.argv.indexOf("--watch") >= 0){
  let ctx = await esbuild.context(config(false))
  await ctx.watch()
}
else {
  await esbuild.build(config(true))
}

