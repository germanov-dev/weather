// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');
module.exports = withPlugins([
	// [
	// 	optimizedImages,
	// 	{
	// 		mozjpeg: {
	// 			quality: 80,
	// 		},
	// 		pngquant: {
	// 			speed: 3,
	// 			strip: true,
	// 			verbose: true,
	// 		},
	// 		imagesPublicPath: '/weather/_next/static/images/',
	// 	},
	// ],
	{
		images: {
			loader: 'imgix',
			path: 'https://germanov.js.org/weather/',
		},
		basePath: '/weather',
		assetPrefix: '/weather/',
		env,
	},
]);
