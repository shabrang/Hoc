import React, { Component, Fragment } from 'react'
import Post from './post'
import Comments from './comments'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Post/>
        <Comments/>
      </Fragment>
    )
  }
}

export default App
