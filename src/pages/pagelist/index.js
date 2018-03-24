import React, {Component} from 'react';
import Customer from './customer'
import {Router, Route, Link, Switch} from 'react-router-dom'
import Product from './product/index'
import UserInfo from './userinfo/index'
import {Layout, Menu, Icon} from 'antd';
import '../../assert/pagelist.css';

const {Header, Sider, Content} = Layout;

class PageList extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: false
    };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (<div className="PageList">
      <Layout>
        <Sider trigger={null} collapsible="collapsible" collapsed={this.state.collapsed}>
          <div className="logo"/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="cloud-o"/>
              <span>
                <Link to="/pagelist/product">产品列表</Link>
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera"/>
              <span>订单列表</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="team"/>
              <span>
                <Link to="/pagelist/userinfo">客户信息</Link>

              </span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user"/>
              <span>用户信息</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{
              background: '#fff',
              padding: 0
            }}>
            <Icon className="trigger" type={this.state.collapsed
                ? 'menu-unfold'
                : 'menu-fold'} onClick={this.toggle}/>
          </Header>
          <Content style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}>
						{this.props.children}
          </Content>
        </Layout>
      </Layout>
    </div>)
  }
}

export default PageList;
