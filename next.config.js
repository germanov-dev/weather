const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	// Use the CDN in production and localhost for development.
	assetPrefix: isProd
		? 'https://cdn.statically.io/gh/germanov-dev/germanov-dev.github.io/weather/'
		: '',
	images: {
		loader: 'imgix',
		path: 'https://germanov-dev.github.io/weather/',
	},
};
