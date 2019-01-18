import React, { Component } from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
import hljs from 'highlight.js'
import {
  timetrans,
  color
} from '../../utils/utils'
import {
  Card,
  Icon,
  Tag,
  Row,
  Col,
  BackTop
} from 'antd'

import Comment from '../comment/comment'
import Navigation from './navigation'
import './desc.css'

class Desc extends Component {

  state = {
    id: 1,
    loading: true
  }
  componentWillMount() {
    marked.setOptions({
      highlight: code => hljs.highlightAuto(code).value
    })
  }

  render() {
    const fakeData = {
      title: "sdkfjksd",
      author: "jsy:",
      created_at: "2018",
      readSize: 3,
      content: '# kdjfk '
    }
    const tags = "dfsdkf,sdfsdf,sdf"

    const IconText = ({ type, text }) => (
      <span key={text}>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    )
    if (fakeData.title) {
      document.title = fakeData.title
    }
    return (
      <Row>
        <BackTop visibilityHeight={300}/>
        <Col
          lg={{ span: 15, offset: 1 }}
          md={{ span: 15, offset: 1 }}
          xs={{ span: 24 }}
        >
          <Card
            className="article-wrapper"
            // loading={this.state.loading}
            title={fakeData.title}
            extra={[
              <Tag color="red" key="author">
                作者：admin
              </Tag>,
              <span style={{marginTop: 10}} key="time">
                {
                  fakeData.created_at
                  ? timetrans(fakeData.created_at)
                  : null
                }
              </span>
            ]}
          >
            <div className="article-tags">
              <span>{fakeData.readSize} 次浏览</span>
              <IconText type="tags-o" text={
                tags.split(',').map(v => (
                  <Tag
                    key={v}
                    color={color[Math.floor(Math.random()*color.length)]}
                    onClick={()=>{}}
                  >
                    {v}
                  </Tag>
                ))}
              />
            </div>
            <div 
              className="article-detail" 
              dangerouslySetInnerHTML={{ __html: fakeData.content ? marked(fakeData.content) : null }} 
            />
          </Card>
          <Comment />
        </Col>
        <Col
          lg={{ span: 6, offset: 1 }}
          md={{ span: 6, offset: 1 }}
          xs={{ span: 0 }}
        >
          {
            fakeData.content ?
            <Card title="目录" className="catalog">
              <Navigation 
                content={fakeData.content}
              />
            </Card>
            : null
          }
        </Col>
      </Row>
    )
  }
}

export default connect(state => ({}), {})(Desc) 