import { PureComponent } from 'react';
import { Form, Input, Button, Icon } from 'antd';

import Layout from '@components/Layout';
import styles from '@static/styles/main.less';
import router from 'next/router';

@Form.create({ name: 'Home' })
class Home extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			...props,
		};
	}

	submit = e => {
		e.preventDefault();
		const { form } = this.state;
		form.validateFields((err, values) => {
			console.log(err)
		});
	};

	render() {
		const { form } = this.state;
		const { getFieldDecorator } = form;

		return (
			<Layout className={styles.test}>
				<span>Home</span>
				<Form onSubmit={this.submit}>
					<Form.Item>
						{getFieldDecorator('username', {
							rules: [{ required: true, message: 'Please input your username!' }],
						})(<Input placeholder="请输入用户名" />)}
					</Form.Item>
					<Button onClick={() => router.push('/')}>返回</Button>
				</Form>
			</Layout>
		);
	}
}

export default Home;
