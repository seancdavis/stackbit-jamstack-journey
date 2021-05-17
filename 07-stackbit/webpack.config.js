const path = require("path");

const env = process.env.NODE_ENV || "development";

module.exports = {
  entry: "./src/js/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "www/js"),
    libraryTarget: "var",
    library: "App",
  },
  plugins: [],
  mode: env,
  watch: env === "development",
};
