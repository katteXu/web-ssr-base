import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
export default ({ children }) => {
	return (
		<Layout>
			<Sider
				style={{
					overflow: 'auto',
					height: '100vh',
					position: 'fixed',
					left: 0,
				}}>
				<div
					className="logo"
					style={{
						height: 32,
						background: 'rgba(255, 255, 255, 0.2)',
						margin: 16,
					}}
				/>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={[]}>
					<Menu.Item key="1">
						<Icon type="user" />
						<span className="nav-text">nav 1</span>
					</Menu.Item>
					<Menu.Item key="2">
						<Icon type="video-camera" />
						<span className="nav-text">nav 2</span>
					</Menu.Item>
					<Menu.Item key="3">
						<Icon type="upload" />
						<span className="nav-text">nav 3</span>
					</Menu.Item>
					<Menu.Item key="4">
						<Icon type="bar-chart" />
						<span className="nav-text">nav 4</span>
					</Menu.Item>
					<Menu.Item key="5">
						<Icon type="cloud-o" />
						<span className="nav-text">nav 5</span>
					</Menu.Item>
					<Menu.Item key="6">
						<Icon type="appstore-o" />
						<span className="nav-text">nav 6</span>
					</Menu.Item>
					<Menu.Item key="7">
						<Icon type="team" />
						<span className="nav-text">nav 7</span>
					</Menu.Item>
					<Menu.Item key="8">
						<Icon type="shop" />
						<span className="nav-text">nav 8</span>
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout style={{ marginLeft: 200, paddingBottom: 80 }}>
				<Header style={{ textAlign: 'center', background: '#fff', padding: 0 }}>header</Header>
				<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
					<div style={{ padding: 20, background: '#fff' }}>{children}</div>
				</Content>
				<Footer
					style={{
						textAlign: 'center',
						position: 'fixed',
						bottom: 0,
						left: 200,
						right: 0,
					}}>
					footer
				</Footer>
			</Layout>
		</Layout>
	);
};
