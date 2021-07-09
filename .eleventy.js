const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/assets')
    eleventyConfig.addPassthroughCopy('./src/js')
    eleventyConfig.addPassthroughCopy('./src/fonts')
    eleventyConfig.addPassthroughCopy('./src/admin')
    eleventyConfig.addPassthroughCopy('./src/.htaccess')

    // Shortcodes
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    // Filters
    // Format Javascript dateObj
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).plus({ days: 1 }).toLocaleString(DateTime.DATE_HUGE);
    });

    // Returns a collection of blog posts in reverse date order
    eleventyConfig.addCollection('blog', collection => {
        return [...collection.getFilteredByGlob('./src/blog/*.md')].reverse();
    });

    // Open browser automatically when browser sync is triggered
    eleventyConfig.setBrowserSyncConfig({
        open: true,
      });

      // Nunjucks Filters
     // Use the limitTo filter to restrict the number of results returned from a collection
     eleventyConfig.addNunjucksFilter('limitTo', require('./src/js/filters/nunjucks-filter-limit-to.js'))

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}