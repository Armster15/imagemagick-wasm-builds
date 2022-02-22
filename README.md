# imagemagick-wasm-builds
Standalone pre built [@imagemagick/magick-wasm](https://github.com/dlemstra/magick-wasm) files

## ❓ Why
I use Vite because I love the speed and efficiency of it. However for some odd reason (which I still never really found the answer to), Vite/Rollup simply wouldn't compile this library.

Building @imagemagick/magick-wasm with Webpack worked but I avoid Webpack like the plague, so this repository compiles @imagemagick/magick-wasm with Webpack, and since
you get standard JavaScript files, you can use it anywhere you want to without having to worry about bundler issues.

## 🌐 CDN
Since the files are prebuilt, you can also use a CDN to load them. This is especially beneficial considering a prebuilt file is ~19MB!

- **UMD:** https://cdn.jsdelivr.net/gh/Armster15/imagemagick-wasm-builds@master/lib/imagemagick.umd.js
- **ESM:** https://cdn.jsdelivr.net/gh/Armster15/imagemagick-wasm-builds@master/lib/imagemagick.esm.js
