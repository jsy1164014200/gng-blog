import React, { Component } from 'react'
import CommentInput from './commentinput'
import CommentList from './commentlist'
import { connect } from 'react-redux'



class Comment extends Component {
  render() {
    return (
      <div className="comment-wrap">
        <CommentInput 
          createComment={this.props.createComment}
        />
        <CommentList />
      </div>
    )
  }
}

export default connect(state => ({}), {})(Comment)