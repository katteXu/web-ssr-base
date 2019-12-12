import { PureComponent } from 'react';
import { Button } from 'antd';
import Layout from '@components/Layout';
import router from 'next/router';
class Index extends PureComponent {
	static async getInitialProps(props) {
		return {};
	}
	render() {
		console.log(this.props);
		return (
			<Layout>
				<div>Index</div>
				<Button onClick={() => router.push('/home')}>homePage</Button>
			</Layout>
		);
	}
}

export default Index;
