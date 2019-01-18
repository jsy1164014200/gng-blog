import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Modal,
  Input,
  Icon,
  message,
  Button
} from 'antd'


class Register extends Component {
  state = {
      username: '',
      password: ''
  }

  handleOk() {
    if(!this.state.username) {
      message.warn('用户名不能为空')
    } else if(!this.state.password){
      message.warn('密码不能为空')      
    } else {
        // TODO: bind this.props register
      this.props.register(this.state)
    }
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <Modal 
        title="Register"
        // TODO: defined visible handleCanel
        visible={this.props.visible}
        onCancel={this.props.handleCancel}
        width={320}
        footer={null}
      >
        <div className="register-input">
          <Input
            style={{marginBottom: 20}}
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          />
          <Input
            style={{marginBottom: 20}}
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
          {/* TODO: confirm password  vis code  */}
        </div>
        <div
          className="register-submit"
        >
          <Button
            style={{width: '100%'}}
            type="primary"
            onClick={() => this.handleOk()}
          >
            REGISTER
          </Button>
        </div>
      </Modal>
    )
  }
}

export default connect( state => ({}), {})(Register)    