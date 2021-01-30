import React from 'react'
import './style.scss'

export default class TextBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
    }
  }
  componentDidMount() {
    console.log(this.props)
    this.setState({
      content: this.props.content,
    })
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props)
    console.log(nextProps)
    this.setState({
      content: nextProps.content,
    })
  }
  render() {
    return (
      <div className="boxes">
        <div className="boxes-container">
          <h3>{this.state.content}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum
            magnam minus neque totam sint quo excepturi.
          </p>
        </div>
      </div>
    )
  }
}
