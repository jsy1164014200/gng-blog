import React, { Component } from 'react'
import { connect } from 'react-redux'
import { color } from '../../utils/utils'


import {
  Card,
  Tag
} from 'antd'
import './sider.css'
import avatar from '../../assets/test.jpeg'


class SiderCustom extends Component {

  state = {
    tags: []
  }

  render() {
    return (
      <div className="sider-container">
        <div className="admin-info">
          <header>
            <img src={avatar} alt="avatar"/>
          </header>
          <p className="admin-name">
            GNG
          </p>
          <p className="admin-desc">
            life is life
          </p>
        </div>
        <div className="recent-article">
          <Card title="最近文章" bordered={false}>
            <ul className="recent-list">
              <li>klsdjfksdjfkdsf</li>
              <li>skdfjsdfsd</li>
              <li>sdf</li>
              <li>sdfsdagsd</li>
            </ul>
          </Card>
        </div>
        <div className="tags-wrapper">
          <Card title="标签" bordered={false}>
            <div className="tags-content">
              <Tag 
                key={1}
                color={color[1]}
                onClick={() => {}}>
                test
              </Tag>
              <Tag 
                key={2}
                color={color[1]}
                onClick={() => {}}>
                test
              </Tag>
              <Tag 
                key={3}
                color={color[3]}
                onClick={() => {}}>
                test
              </Tag>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default connect(state => ({}), {})(SiderCustom)