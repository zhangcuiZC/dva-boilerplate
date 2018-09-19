import pxtorem from "postcss-pxtorem";

export default {
  entry: "src/index.js",
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 100,
      propWhiteList: []
    })
  ],
  env: {
    development: {
      extraBabelPlugins: ["dva-hmr"]
    }
  },
  ignoreMomentLocale: true,
  html: {
    template: "./src/index.ejs"
  },
  publicPath: "/",
  disableDynamicImport: false,
  hash: true,
  proxy: {}
};
