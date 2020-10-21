import React from 'react';
import './BUju.css'
import { Layout, Menu, Breadcrumb,Row, Col,Avatar } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
import Jianjie from '../conter/Jianjie';
import Luyan from '../conter/Luyan'
import Lianxi from '../conter/Lianxi'
import Geren from '../conter/Geren';
import Yonghu from '../conter/List';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Jdbj extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <div>

                <Row style={{ minHeight: '10vh' }}>
                    
                    <Col span={24}>  <Avatar src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1919242843,3946303179&fm=15&gp=0.jpg" />后台管理系统</Col>
                </Row>
                <div>
                <Layout style={{ minHeight: '90vh' }}>
                    <Router>
                        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                            <div className="logo" />
                            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                    <NavLink to='/jdbj/'>用户列表</NavLink>
                                </Menu.Item>
                                <Menu.Item key="2" icon={<PieChartOutlined />}>
                                    <NavLink to='/jdbj/jianjie'>添加用户</NavLink>
                                </Menu.Item>
                                <Menu.Item key="4" icon={<DesktopOutlined />}>
                                    <NavLink to='/jdbj/lianxi'> 联系方式</NavLink>
                                </Menu.Item>
                                <Menu.Item key="5" icon={<DesktopOutlined />}>
                                    <NavLink to='/jdbj/geren'> 个人中心</NavLink>
                                </Menu.Item>

                            </Menu>
                        </Sider>
                        <Layout className="site-layout">
                            
                            <Content style={{ margin: '0 16px' }}>
                                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                    <Route exact path='/jdbj' component={Yonghu} />
                                    <Route path='/jdbj/jianjie' component={Jianjie} />
                                    <Route path='/jdbj/luyan/:id' component={Luyan} />
                                    <Route path='/jdbj/lianxi' component={Lianxi} />
                                    <Route path='/jdbj/geren' component={Geren} />
                                </div>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                        </Layout>

                    </Router>
                </Layout>
                </div>
            </div>
        );
    }
}

export default Jdbj