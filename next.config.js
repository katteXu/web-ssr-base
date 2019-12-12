// const withLess = require('@zeit/next-less');
const withLessExcludeAntd = require('./_nextConfig/less.config');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withCss = require('@zeit/next-css');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

// 自定义antd 样式
const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8'));
// 别名
const alias = {
	'@components': './components',
	'@api': './api',
	'@static': './static',
	'@utils': './utils',
};
// 初始化
let config = {
	analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
	analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
	bundleAnalyzerConfig: {
		server: {
			analyzerMode: 'static',
			reportFilename: '../bundles/server.html',
		},
		browser: {
			analyzerMode: 'static',
			reportFilename: '../bundles/client.html',
		},
	},
	webpack: (config, { isServer, dev, webpack }) => {
		if (isServer) {
			const antStyles = /antd\/.*?\/style.*?/;
			const origExternals = [...config.externals];
			config.externals = [
				(context, request, callback) => {
					if (request.match(antStyles)) return callback();
					if (typeof origExternals[0] === 'function') {
						origExternals[0](context, request, callback);
					} else {
						callback();
					}
				},
				...(typeof origExternals[0] === 'function' ? [] : origExternals),
			];

			config.module.rules.unshift({
				test: antStyles,
				use: 'null-loader',
			});
		} else {
			// 提取公共模块
			!dev && (config.optimization.splitChunks.cacheGroups.commons.minChunks = 2);
			// 暂时没有用到Moment 排除掉
			config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
		}
		// config.devtool = 'source-map';
		Object.keys(alias).forEach(key => {
			config.resolve.alias[key] = path.resolve(alias[key]);
		});
		return config;
	},
	distDir: 'build',
};

// css解析
config = withCss(config);

// withLess的配置文件
config = withLessExcludeAntd(
	Object.assign({}, config, {
		lessLoaderOptions: {
			javascriptEnabled: true,
			modifyVars: themeVariables, // make your antd custom effective
		},
		cssModules: true,
		cssLoaderOptions: {
			localIdentName: '[local]__[hash:base64:5]',
			importLoaders: 1,
		},
	})
);

// 分析
config = withBundleAnalyzer(config);
module.exports = config;
