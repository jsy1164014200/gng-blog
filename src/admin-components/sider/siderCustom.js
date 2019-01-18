import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import './sider.css'
import SiderMenu from './siderMenu'
const { Sider } = Layout


class SiderCustom extends Component {
  state = {
    collapsed: false,
    mode: 'inline',
    openKey: '',
    selectedKey: ''
  }
  render() {
    const menus = [{
      key: '/admin/index',
      title: '首页',
      icon: 'home'
    },
    {
      key: '/admin/blog',
      title: '博客',
      icon: 'edit',
      sub: [{
        key: '/admin/blog/publish',
        title: '发布博客',
        icon: ''
      }],
    },
    {
      key: '/admin/catalog',
      title: '分类',
      icon: 'exception',
      sub: [{
        key: '/admin/catalog/list',
        title: '分类列表',
        icon: ''
      }, {
        key: '/admin/catalog/new',
        title: '创建分类',
        icon: ''
      }]
    },
    {
      key: '/admin/collect',
      title: '收藏',
      icon: 'star',
      sub: [{
        key: '/admin/collect/list',
        title: '收藏列表',
        icon: ''
      }, {
        key: '/admin/collect/new',
        title: '添加收藏',
        icon: ''
      }]
    }
  ]

    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        breakpoint="md"
        collapsedWidth="0"
        className="sider-contaniner"
      >
        <div className="logo"></div>
        <SiderMenu
          menus={menus}
          onClick={this.menuClick}
          theme="dark"
          mode="inline"
        />
      </Sider>
    )
  }
}

export default withRouter(SiderCustom)