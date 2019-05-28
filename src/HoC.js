import React  from 'react'
import axios from 'axios'

const WrappedComponent = (Component, url) => {

  return class HoC extends React.Component {
    state = {
      data: []
    }

    componentDidMount () {
      axios.get(url).then(response => {
        return this.setState({ data: response.data })
      })
    }

    render () {
      //console.log(this.state.data)
      return (
        this.state.data ? <Component {...this.state}/> : <div>...loading</div>
      )
    }
  }

}

export default WrappedComponent
