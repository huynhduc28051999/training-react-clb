import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
  constructor(props) {
    super(props)
  }
  handleButtonClick = () => {
    this.props.history.push('/login')
  }
  render() {
    // console.log(this.props)
    return (
      <div>
        <button onClick={this.handleButtonClick}>click me</button>
        home page
        <Link to='/login'>go to login page</Link>
      </div>
    )
  }
}
