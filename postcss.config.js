// const path = require('path');

module.exports = (ctx) => {
	console.log(ctx);
	return ({
		map: { inline: false },
		parser: ctx.options.parser,
		plugins: {
			'postcss-import': {},
			'postcss-simple-vars': {},
			'postcss-mixins': {},
			'postcss-extend': {},
			'postcss-nested': {},
			'postcss-cssnext': {},
			cssnano: {},
		},
	});
};
