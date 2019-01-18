import React, { Component } from 'react';
import {connect} from 'react-redux'
import { color } from '../../utils/utils'

import {
  Row,
  Col,
  // message,
  List,
  Tag
} from 'antd'

import SiderCustom from '../sider/siderCustom'
import './collect.css'

class Collect extends Component {

  state = {
    data: [
      {
        title: "dsf",
        date: "2018",
        link: "http://www.baidu.com",
        author: "jsy"
      }
    ],
    currentPage: 1,
    totalElements: 10
  }

  render() {
    const pagination = {
      pageSize: 10,
      size: 'small',
      current: this.state.currentPage,
      total: this.state.totalElements,
      onChange: ((page, pageSize) => {
        this.setState({
          currentPage: page
        })
        
      }),
    }
    return (
      <div>
        <Row>
          <Col
            lg={{ span: 15, offset: 1 }}
            md={{ span: 15, offset: 1 }}
            xs={{ span: 24 }}
          >
            <List
              className="collect-list"
              header={<div className="collect-header">文章收藏</div>}
              itemLayout="vertical"
              pagination={pagination}
              dataSource={this.state.data}
              renderItem={item => (
                <List.Item
                  key={item.title}
                  extra={item.date}
                >
                  <List.Item.Meta
                    description={[<a key={item.link} href={item.link}>{item.title}</a>, 
                      <Tag
                        key={item.id}
                        className="article-author"
                        color={color[Math.floor(Math.random()*color.length)]}
                      >
                        {item.author}
                      </Tag>
                    ]}
                  />
                </List.Item>
              )}
            />
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


export default connect(() => ({}), {})(Collect)