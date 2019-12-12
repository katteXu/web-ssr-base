import App from 'next/app';
import { ConfigProvider, message } from 'antd';
import zh_cn from 'antd/lib/locale/zh_CN';
import React from 'react';

export default class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		ctx.isServer = typeof window === 'undefined';
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	componentDidMount() {
		/**
		 * 全局配置
		 */
		// 提示只弹出一次
		message.config({
			maxCount: 1,
		});
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<ConfigProvider locale={zh_cn}>
					<Component {...pageProps} />
				</ConfigProvider>
				<style jsx global>
					{`
						* {
							transition: all 0s !important;
						}
					`}
				</style>
			</>
		);
	}
}
