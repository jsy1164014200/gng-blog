import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Row,
  Col,
  Input,
  Button,
  Select
} from 'antd'
import './publish.css'
const { Option } = Select

class Publish extends Component {

  state = {
    title: '',
    summary: '',
    content: '',
    tags: '',
    catalog_id: 0,
    catalogData: ['dfsdkj','dskjfkj','jksdj'],
    user_id: 1
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit() {
// TODO:    this.props.publish(this.state)
    this.setState({
      title: '',
      summary: '',
      content: '',
      tags: ''
    })
  }
  handleContent(obj) {
    this.setState({
      content: obj
    })
  }
  handleSelect(value) {
    this.setState({
      catalog_id: value
    })
  }
  render() {
    const { TextArea } = Input
    return (
      <div className="publish">
        <header className="publish-header">
          <h1>发表博客</h1>
        </header>
        <Row type="flex" justify="center">
          <Col xs={20} sm={16} md={16} lg={16} xl={16}>
            <div className="publish-input">
              <Input
                addonBefore="标题"
                size="large" 
                placeholder="文章标题"
                name="title"
                value={this.state.title}
                onChange = {(e) => this.handleChange(e)}
              />
            </div>
            <div className="publish-input">
              <TextArea 
                rows={6} 
                autosize={{ minRows: 5}}
                placeholder="文章摘要" 
                name="summary"
                value={this.state.summary}
                onChange = {(e) => this.handleChange(e)}
              />
            </div>
            <div className="publish-input">
              <TextArea 
                rows={6} 
                autosize={{ minRows: 15}}
                placeholder="文章内容 markdown格式" 
                name="content"
                value={this.state.content}
                onChange = {(e) => this.handleChange(e)}
              />
            </div>
            <div className="publish-input">
              <Input
                addonBefore="标签"
                size="large" 
                placeholder="文章标签"
                name="tags"
                value={this.state.tags}
                onChange = {(e) => this.handleChange(e)}
              />
            </div>
            <div className="publish-input">
              <span>分类：</span>
              {this.state.catalogData ?
               <Select
                  defaultValue={this.state.catalogData[0].name}
                  onChange={(e) => this.handleSelect(e)}
                >
                  {
                    this.state.catalogData.map(v => (
                      <Option value={v.id} key={v.id}>
                        {v.name}
                      </Option>
                    ))
                  }
                </Select> 
              : null}
            </div>
            <div className="publish-input">
              <Button
                type="primary"
                size="large"
                icon="check-circle-o"
                style={{float: 'right'}}
                onClick={() => this.handleSubmit()}
              >
                发布
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(state => ({}), {})(Publish)