import React, { Component } from 'react'
import './app.scss'
import avartar from './avatar.png'
import ComponentCon from './children'

/// tạo slide show

const listImage = ['url1', 'url2', 'url3', 'url4']
let addressTimeout
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viTriChot: 1
    }
  }

  thayDoiViTriChot = (index) => {
    this.setState({
      viTriChot: index
    })
  }
  chuyenToi = () => {
    let viTriTiepTheo = this.state.viTriChot + 1
    if (viTriTiepTheo >= listImage.length) viTriTiepTheo = 0
    this.setState({
      viTriChot: viTriTiepTheo
    })
  }
  quayLai = () => {
    let viTriTiepTheo = this.state.viTriChot - 1
    if (viTriTiepTheo < 0) viTriTiepTheo = listImage.length - 1
    this.setState({
      viTriChot: viTriTiepTheo
    })
  }
  componentDidMount() {
    addressTimeout = setTimeout(() => {
      this.chuyenToi()
    }, 5000)
  }
  componentDidUpdate() {
    if (addressTimeout) clearTimeout(addressTimeout)
    addressTimeout = setTimeout(() => {
      this.chuyenToi()
    }, 5000)
  }
  render() {
    return (
      <div>
        {listImage.map((item, index) => (
          <span>
            <div>
              {this.state.viTriChot === index ? `${item} (đang hiện)` : item}
              <button onClick={() => this.thayDoiViTriChot(index)}>nut chuyen {index + 1}</button>
            </div>
          </span>
        ))}
        <button onClick={this.chuyenToi}>chuyen toi</button>
        <button onClick={this.quayLai}>lui lai</button>
      </div>
    )
  }
}
