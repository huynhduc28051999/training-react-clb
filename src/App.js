import React, { Component } from 'react'
import './app.scss'
import avartar from './avatar.png'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      list: []
    }
  }
  todo = async() => {
    const res = await fetch('http://localhost:4000/authors', { method: 'GET'})
    const data = await res.json()
    return data
  }
  addName = async () => {
    await fetch('http://localhost:4000/authors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Ly Huynh Duc'
      })
    })
    this.todo().then((data) => {
      this.setState({ list: data })
    })
  }
  componentDidMount() {
    this.todo().then((data) => {
      setTimeout(() => {
        this.setState({ list: data })
      }, 5000)
    })
  }
  // promise là 1 lời hứa
  // lời hứa tất nhiên phải chứa đựng điều gì đó phải làm
  // điều gì đó không biết khi nào mới thực hiện xong
  //
  render() {
    return (
      <div>
        <button onClick={this.addName}>add name</button>
        {this.state.list.map(item => (
          <div>{item}</div>
        ))}
      </div>
    )
  }
}
