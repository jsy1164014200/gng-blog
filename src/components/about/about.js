import React, { Component } from 'react'
import {connect} from 'react-redux'

import {
  Row,
  Col,
  Card,
  Icon
} from 'antd'

import './about.css'
import SiderCustom from '../sider/siderCustom'
class About extends Component {

  render() {
    return (
      <div>
        <Row>
        <Col
            lg={{ span: 15, offset: 1 }}
            md={{ span: 15, offset: 1 }}
            xs={{ span: 24 }}
            className="about-wrapper"
          >
            <Card
              title="关于我"
              style={{marginBottom: 20}}
            >
              <div className="content">
                <p style={{textAlign:'center'}}>
                  GNG-Jason-jsy
                </p>
                <p style={{marginTop: 20,textAlign:'center'}}>
                  江湖人称肥哥
                </p>
                <p style={{marginTop: 20,textAlign: 'center'}}>
                  就读与华中科技大学管理学院本科二年级
                </p>
              </div>
            </Card>
            <Card
              title="联系我"
            >
              <div className="content">
                <p>
                  <Icon type="mail" /> 邮箱：gng@bingyan.net
                </p>
                <p style={{marginTop: 20}}>
                  <Icon type="github" /> Github：<a href="https://github.com/jsy1164014200" target="_blank" rel="noopener noreferrer">gng</a>
                </p>
              </div>
            </Card>
          </Col>
          <Col
            lg={{ span: 6, offset: 1 }}
            md={{ span: 6, offset: 1 }}
            xs={{ span: 0 }}
          >
            <SiderCustom />
          </Col>
        </Row>
        <Row style={{marginTop: 20}}>
          <Col
            lg={{ span: 0 }}
            md={{ span: 0 }}
            xs={{ span: 24 }}
          >
            <SiderCustom />
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(state => ({}), {})(About)