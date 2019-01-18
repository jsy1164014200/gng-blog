import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
  Input,
  Row,
  Col,
  Button,
  Icon,
  Select,
  message
} from 'antd'
const { Option } = Select

class Edit extends Component {

  state = {
    title: '',
    summary: '',
    content: '',
    tags: '',
    catalogData: '',
    catalog_id: 0,
    id: ''
  }


  componentDidMount() {
  }
  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSelect(value) {
    this.setState({
      catalog_id: value
    })
  }
  handleSubmit() {
    // TODO: this.updateBlog(this.state)
    this.setState({
      title: '',
      summary: '',
      content: '',
      tags: '',
      catalog: ''
    })
  }
  
  render() {
    const { TextArea } = Input
    return (
      <div className="publish">
        <Icon 
          type="caret-left" 
          style={{ fontSize: 16, color: '#08c', cursor: 'pointer' }}
          onClick={() => this.props.history.goBack()}
        />
        <header className="publish-header">
          <h1>编辑博客</h1>
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
                  defaultValue={this.state.currentCatalog.name}
                  onChange={this.handleSelect}
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
                onClick={this.handleSubmit}
              >
                更新
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(state => ({}), {})(withRouter(Edit))