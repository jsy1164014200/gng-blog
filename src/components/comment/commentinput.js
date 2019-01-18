import React, { Component } from 'react'
import { connect } from 'react-redux'


import {
  Card,
  Input,
  Button,
  message
} from 'antd'
import './comment.css'
const { TextArea } = Input


class CommentInput extends Component {
  
  state = {
    content: ''
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit() {
    if(!this.state.content) {
      message.error('请先输入内容', 1)
    // } else if(!Cookies.get("token")) {
      // message.error('请先登录', 1)
    } else {
      // const blog_id = this.props.match.params.id
      // const user_id = Cookies.get('user_id')
      // const username = Cookies.get('username')
      // const content = this.state.content
      // this.props.createComment({
      //   blog_id,
      //   user_id,
      //   content,
      //   username
      // })
      this.setState({
        content: ''
      })
    }
  }
  render() {
    return (
      <Card title="评论" bordered={false}>
        <div className="comment-input">
          <TextArea 
            rows={4}
            autosize={{minRows: 3}}
            value={this.state.content}
            ref={(textarea) => this.textarea = textarea}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div className="comment-submit">
          <Button 
            ghost 
            type="primary"
            onClick={() => this.handleSubmit()}
          >
            发布
          </Button>
        </div>
      </Card>
    )
  }
}

export default connect(state => ({}), {})(CommentInput)