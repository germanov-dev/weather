module.exports = {
	images: {
		loader: 'imgix',
		path: 'https://germanov.js.org/weather/',
	},
	basePath: '/weather',
	assetPrefix: '/weather/',
	imagesPublicPath: '/weather/_next/static/',
	env: {
		REACT_APP_WEATHER_API_KEY: process.env.REACT_APP_WEATHER_API_KEY,
	},
};
