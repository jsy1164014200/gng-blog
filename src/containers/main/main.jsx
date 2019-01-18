import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'

import {Layout} from 'antd'
import './main.css'
import HeaderCustom from '../../components/header/headerCustom'

import {routes} from '../../constants/routes.js'


const {Content,Footer} = Layout
class Index extends Component {

  componentWillMount() {
    document.title = 'GNG blog'
  }

  render() {
    const contentHeight = document.body.clientHeight// - 64 - 62
    return (
      <Layout className="wrapper">
        <HeaderCustom/>
        <Layout className="wrapper-container">
          <Layout className="wrapper-content">
            <Content style={{padding:24,margin:0,minHeight:contentHeight,height:'100%',overflow:'initial'}}>
              {
                routes.map(({path,key,component,...props}) => (
                  <Route key={key}
                  exact
                  path={path}
                  component={component}
                  {...props}
                  />
                ))
              }
              
            </Content>
          </Layout>
          <Footer style={{textAlign: 'center'}}>
            Copyright © GNG 2019
          </Footer>
        </Layout>
      </Layout>
    )
  }

}

export default connect(
  state => ({test:state.test}),
  {}
)(Index)
// bind on this.props