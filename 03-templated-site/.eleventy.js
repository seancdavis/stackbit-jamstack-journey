module.exports = function (eleventyConfig) {
  // Copy static assets over to _site directory.
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });

  return {
    dir: {
      input: "src",
    },
  };
};
