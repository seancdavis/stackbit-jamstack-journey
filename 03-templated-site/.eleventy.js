module.exports = function (eleventyConfig) {
  // Copy static assets over to _site directory.
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("js");
  // Return configuration object.
  return {};
};
