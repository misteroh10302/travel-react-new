
/**
 * Turn an array into a space-separated string of classnames
 */

module.exports.cn = (input) => {
	if (typeof input === 'string') return input;
	return input.join(' ');
};

/**
 * Check an array to see if it has one of any number of matches
 */

module.exports.findOne = (haystack, needles) => needles.some(needle => haystack.indexOf(needle) >= 0);

/**
 * Make a string URL-friendly.
 */

module.exports.slugify = text => text.toString().toLowerCase().replace(/\s+/g, '-');
