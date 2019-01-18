import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  List,
  Icon,
  Button,
  Modal,
  Tag
} from 'antd'

import { color } from '../../utils/utils'
import './index.css'
const confirm = Modal.confirm

class Index extends Component {
  state = {
    currentPage: 1
  }

  handlerDelete(id) {
    confirm({
      title: '删除提示',
      content: '此操作不可逆，你是否确认删除？',
      onOk() {
        //TODO: delete
      },
      onCancel() {},
    })
  }
  render() {
    const pagination = {
      pageSize: 5,
      current: this.state.currentPage,
      total: 10,
      size: 'small',
      onChange: ((page, pageSize) => {
        this.setState({
          currentPage: page
        })
        let params = {
          offset: pageSize * (page - 1),
          limit: 5,
          order: 'DESC'
        }
        // TODO: post request 
      })
    }
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    )

    const modelingData = [
      {
        title: "tengxun mianshi",
        summary: "dsfk",
        commentSize: 4,
        tags: "dfs,sdfsd,dsfsd",
        created_at: "2018"
      },
      {
        title: "tengxun mianshi",
        summary: "dsfk",
        commentSize: 4,
        tags: "dfs,sdfsd,dsfsd",
        created_at: "2018"
      },
      {
        title: "tengxun mianshi",
        summary: "dsfk",
        commentSize: 4,
        tags: "dfs,sdfsd,dsfsd",
        created_at: "2018"
      },
      {
        title: "tengxun mianshi",
        summary: "dsfk",
        commentSize: 4,
        tags: "dfs,sdfsd,dsfsd",
        created_at: "2018"
      },
      {
        title: "tengxun mianshi",
        summary: "dsfk",
        commentSize: 4,
        tags: "dfs,sdfsd,dsfsd",
        created_at: "2018"
      }
    ]
    return (
      <List
        className="blog-list"
        itemLayout="vertical"
        size="large"
        pagination={pagination}
        dataSource={modelingData}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={
              [<IconText type="message" text={item.commentSize} />,
               <IconText type="tags-o" text={
                item.tags.split(',').map(v => (
                  <Tag
                    key={item.id + Math.random()}
                    color={color[Math.floor(Math.random()*color.length)]}
                    onClick={()=>{}}
                  >
                    {v}
                  </Tag>
              ))
              } />,
              item.catalog ?
              <IconText type="folder" text={item.catalog.name} />
              : null
            ]}
            extra={
              [
                <Button
                  key={item.id}
                  type="danger"
                  ghost
                  onClick={() => this.handlerDelete(item.id)}
                >
                  删除
                </Button>,
                <Button
                  key={item.created_at}
                  type="primary"
                  ghost
                  onClick={() => this.props.history.push(`/app/blog/edit/${item.id}`)}
                >
                  编辑
                </Button>
              ]
            }
          >
            <List.Item.Meta
              title={item.title}
              description={item.summary}
            />
          </List.Item>
        )}
      />
    )
  }
}

export default connect(state => ({}), {})(Index)