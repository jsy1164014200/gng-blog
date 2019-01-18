import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  List,
  Button,
  message,
  Modal,
  Tag
} from 'antd'

const confirm = Modal.confirm

class StarList extends Component {

  state = {
    data: '',
    totalElements: 0,
    currentPage: 1
  }

  componentDidMount() {
  }

  handleDelete(id) {
      confirm({
      title: '删除提示',
      content: '此操作不可逆，你是否确认删除？',
      onOk() {
 //       that.deleteCollect(id)
      },
      onCancel() {}
    })
  }
  render() {
    const pagination = {
      pageSize: 10,
      current: this.state.currentPage,
      total: this.state.totalElements,
      size: 'small',
      onChange: ((page, pageSize) => {
        this.setState({
          currentPage: page
        })
        let params = {
          offset: pageSize * (page - 1),
          limit: 10,
          order: 'DESC'
        }
        // TODO: this.getCollectList(params)
      })
    }

    const fakeData = [
      {
        title: 'dkjf',
        id: 'sdjf',
        link: 'http://www.baidu.com',
        author: 'kdsj'
      },
      {
        title: 'dkjf',
        id: 'sdjf',
        link: 'http://www.baidu.com',
        author: 'kdsj'
      },
      {
        title: 'dkjf',
        id: 'sdjf',
        link: 'http://www.baidu.com',
        author: 'kdsj'
      },
      {
        title: 'dkjf',
        id: 'sdjf',
        link: 'http://www.baidu.com',
        author: 'kdsj'
      }
    ]
    return (
      <List 
        itemLayout="vertical"
        pagination={pagination}
        dataSource={fakeData}
        renderItem={item => (
          <List.Item
            style={{paddingBottom: 0}}
            key={item.id}
            actions={[]}
            extra={[
              <Button
                style={{marginRight: 20}}
                ghost 
                type="primary" 
                key={item.title}
                onClick={() => this.props.history.push(`/app/collect/edit/${item.id}`)}
              >
                编辑
              </Button>,
              <Button 
                ghost 
                type="danger" 
                key={item.id}
                onClick={() => this.handleDelete(item.id)}
              >
                删除
              </Button>
            ]}
          >
            <List.Item.Meta 
              description={[<a key={item.link} href={item.link}>{item.title}</a>, 
                <Tag
                  key={item.id}
                  color="red"
                  style={{marginLeft: 10}}
                >
                  {item.author}
                </Tag>
              ]}
            />
          </List.Item>
        )}
      />
    )
  }
}

export default connect(state => ({}), {})(StarList)