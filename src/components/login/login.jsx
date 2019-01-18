import React,{Component} from 'react'
import { connect } from 'react-redux' 

import {
    Modal,
    Input,
    Icon,
    message,
    Button
} from 'antd'


class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    handleChange(event) {
        this.setState({
          [event.target.name]:event.target.value
        })
    }
    handleOk() {
        if(!this.state.username) {
          message.warn('用户名不能为空')
        } else if(!this.state.password){
          message.warn('密码不能为空')      
        } else {
          this.props.login(this.state)
          // TODO: defined login in api
        }
      }
    render() {
        return (
            <Modal title="Login"
            // TODO: defined father components visible handleCancel 
                visible={this.props.visible}
                onCancel={this.props.handleCancel}
                width={320}
                footer={null}>
            <div>
                <Input
                    style={{marginBottom:20}}
                    prefix={<Icon type="user" style={{color:'rgba(0,0,0,.5'}}></Icon>}
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={(e) => {this.handleChange(e)}}
                ></Input>
                <Input
                    style={{marginBottom:20}}
                    prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.5'}}></Icon>}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(e) => {this.handleChange(e)}}
                ></Input>
            </div>
            <Button
                style={{width:'100%'}}
                type="primary"
                onClick={() => this.handleOk()}
            >LOGIN</Button>
            </Modal>
        )
    }
}

export default connect(
    state => ({}),
    {}
  )(Login)