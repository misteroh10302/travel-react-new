module.exports = ctx => ({
	map: { inline: false },
	parser: ctx.options.parser,
	plugins: {
		'postcss-import': { root: ctx.file.dirname },
		precss: {},
		'postcss-cssnext': {},
		cssnano: {},
	},
});
