import React, { Component } from 'react'
import './app.scss'
import avartar from './avatar.png'

// Đây là cách xử lí khi form chỉ có dưới 3 field (input)
const tong = 100000
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputTrc: 0,
      inputFValue: ''
    }
  }
  handlefNameChange =(event) => {
    const input = isNaN(Number(event.target.value)) ? 0 : Number(event.target.value)
    const soTienConLai = tong - input
    this.setState({
      inputTrc: input,
      inputFValue: soTienConLai
    })

  }
  showValueFInput = () => {
    console.log(this.state.inputFValue)
  }
  render() {
    return (
      <div>
        <form>
          <label for="fname">First name:</label><br/>
          <input type="text"name="fname"
            onChange={this.handlefNameChange}
            value={this.state.inputTrc}
          /><br/>
          <input type="text" name="lname" value={this.state.inputFValue}/><br/><br/>
        </form>
        <button onClick={this.showValueFInput}>click me</button>
      </div>
    )
  }
}
