import React, { Component } from 'react'
import WrapedComponent from './HoC'
import { posts } from './constant'

const Post = (props) => {

  return (
    <div>
      <h2>posts</h2>
      <ul>
        {props.data.map((item) => {
          return <li key={item.id}>{item.title}</li>
        })}
      </ul>

    </div>
  )

}

export default WrapedComponent(Post, posts)