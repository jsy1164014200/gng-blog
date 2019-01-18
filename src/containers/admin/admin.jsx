import React, { Component } from 'react'
import { Layout } from 'antd'
import {
  Route
} from 'react-router-dom'
import { connect } from 'react-redux'

import SiderCustom from '../../admin-components/sider/siderCustom'
import HeaderCustom from '../../admin-components/header/headerCustom'
import './admin.css'
import routes from './routes.jsx'
import Login from '../../admin-components/login/login.js'

const { Content, Footer } = Layout


class Admin extends Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.logout = this.logout.bind(this)
  }
  state = {
    collapsed: false
  }
  logout () {

    this.props.logoutSubmit()
    this.props.history.push('/login')
  }
  toggle () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
        
      <div className="container">
        <Layout >
          <SiderCustom
            collapsed={this.state.collapsed}
          >
          </SiderCustom>
          <Layout>
            <HeaderCustom
              collapsed={this.state.collapsed}
              toggle={this.toggle}
              logout={this.logout}
            >
            </HeaderCustom>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', overflow: 'initial'}}>
            {/* { 
                routes.map(({ path, key, component, ...props }) => (
                  <Route key={key}
                    exact
                    path={path}
                    component={component}
                    {...props}
                  />
                ))
            } */}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Copyright © Water 2018
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default connect(state => ({}), {})(Admin)  