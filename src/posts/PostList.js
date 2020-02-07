import React, { Component } from 'react'
import PostData from '../data/posts.json'
import PostDetail from './PostDetail'

class PostList extends Component {
  render () {
    return (
      <div>
        <h1>Hello World</h1>
        {PostData.map((post, index) => {
          return <PostDetail post={post} key={index} />
        })}
      </div>
    )
  }
}

export default PostList
