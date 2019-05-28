import React from 'react'
import { comments } from './constant'
import WrapedComponent from './HoC'

const Comments = (props) => {
  return (
    <div>
      <h2>comments</h2>
      <ul>
        {props.data.map((comment) => {
          return <li key={comment.postId}>{comment.body}</li>
        })}

      </ul>
    </div>
  )
}
export default WrapedComponent(Comments, comments)