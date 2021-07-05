const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/assets')
    eleventyConfig.addPassthroughCopy('./src/js')
    eleventyConfig.addPassthroughCopy('./src/admin')

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_HUGE);
    });

    eleventyConfig.addNunjucksFilter('limitTo', require('./src/js/filters/nunjucks-filter-limit-to.js'))

    eleventyConfig.setBrowserSyncConfig({
        open: true,
      });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}