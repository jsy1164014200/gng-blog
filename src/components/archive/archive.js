import React, { Component } from 'react'
import { timetrans } from '../../utils/utils'
import {connect} from 'react-redux'
import {
  Row,
  Col,
  List
} from 'antd'

import SiderCustom from '../sider/siderCustom'
import './archive.css'
class Archive extends Component {
  state = {
    data: [
      {
        title: "sdfksdkfsdkjfsd",
        created_at: "2018"
      }
    ],
    year: 2018,
    currentPage: 1
  }

  render() {

    const pagination = {
      pageSize: 1,
      current: this.state.currentPage,
      total: 3,
      size: 'small',
      onChange: ((page, pageSize) => {
        this.setState({
          currentPage: page
        })
      })
    }
    return (
      <div>
        <Row>
          <Col
            lg={{ span: 15, offset: 1 }}
            md={{ span: 15, offset: 1 }}
            xs={{ span: 24 }}
            className="archive-wrapper"
          >
            <List
              itemLayout="vertical"
              header={this.state.year}
              pagination={pagination}
              dataSource={this.state.data}
              className="archive-list"
              renderItem={item => (
                <List.Item
                  key={item.title}
                  extra={timetrans(item.created_at)}
                  style={{cursor: 'pointer'}}
                >
                  <List.Item.Meta
                    description={item.title}
                    onClick={()=>this.props.history.push(`/app/blog/desc/${item.id}`)}
                  />
                </List.Item>
              )}
            >
            </List>
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

export default connect(state => {},{})(Archive)