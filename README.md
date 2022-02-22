# imagemagick-wasm-builds
Standalone pre built [@imagemagick/magick-wasm files](https://github.com/dlemstra/magick-wasm)

## ❓ Why
I use Vite because I love the speed and efficiency of it. However for some odd reason (which I still never really found the answer to), Vite/Rollup simply wouldn't compile this library.

Webpack worked but I avoid Webpack like the plague, so this repository compiles @imagemagick/magick-wasm with Webpack, and since
you get standard JavaScript files, you can use it anywhere you want to without having to worry about compiler issues.
