import React, {Component} from 'react'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'  // 可以操作前端cookie的对象 set()/get()/remove()

import {Button, DatePicker} from 'antd'

import {login} from '../../redux/actions'



class Main extends Component {


  render() {
    return (<div>
        <input type="submit" onClick={() => {this.props.login()}}/>
        <DatePicker/>
    </div>)
  }


}

export default connect(
  state => ({test:state.test}),
  {login}
)(Main)
// bind on this.props