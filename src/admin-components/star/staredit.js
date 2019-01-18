import React, { Component } from 'react'
import {
  Row,
  Col,
  Button,
  Input,
  message
} from 'antd'

class StarEdit extends Component {
  
  state = {
    title: '',
    author: '',
    date: '',
    link: '',
    id: ''
  }
  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render() {
    return (
      <Row type="flex" justify="center">
        <Col span={14}>
          <header className="new-collect-header">
            <h1>添加收藏</h1>
          </header>
          <div className="new-collect-input">
            <Input
              addonBefore="标题" 
              size="large"
              placeholder=""
              name="title"
              value={this.state.title}
              onChange = {(e) => this.handleChange(e)}
            />
          </div>
          <div className="new-collect-input">
            <Input
              addonBefore="作者" 
              size="large"
              placeholder=""
              name="author"
              value={this.state.author}
              onChange = {(e) => this.handleChange(e)}
            />
          </div>
          <div className="new-collect-input">
            <Input
              addonBefore="链接" 
              size="large"
              placeholder=""
              name="link"
              value={this.state.link}
              onChange = {(e) => this.handleChange(e)}
            />
          </div>
          <div className="new-collect-input">
            <Input
              addonBefore="时间" 
              size="large"
              placeholder=""
              name="date"
              value={this.state.date}
              onChange = {(e) => this.handleChange(e)}
            />
          </div>
          <div className="new-collect-input">
            <Button
              type="primary"
              size="large"
              icon="check-circle-o"
              style={{float: 'right'}}
              onClick={() => this.handleSubmit()}
            >
              更新
            </Button>
          </div>
        </Col>
      </Row>
    )
  }
}

export default StarEdit