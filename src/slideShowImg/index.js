import React, { Component } from 'react'
import anh1 from './../image/anh1.jpg'
import anh2 from './../image/anh2.jpg'
import anh3 from './../image/anh3.jpg'
import anh4 from './../image/anh4.jpg'
import './index.scss'

const listImage = [
  {
    title: 'Anh1',
    src: anh1
  },
  {
    title: 'Anh2',
    src: anh2
  },
  {
    title: 'Anh3',
    src: anh3
  },
  {
    title: 'Anh4',
    src: anh4
  }
]

let timeout
export default class SlideShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }
  componentDidUpdate() {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      this.setState(oldState => ({
        index: oldState.index + 1 >= listImage.length ? 0 : oldState.index + 1
      }))
    }, 5000)
  }
  componentDidMount() {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      this.setState(oldState => ({
        index: oldState.index + 1 >= listImage.length ? 0 : oldState.index + 1
      }))
    }, 5000)
  }
  handleNextClick = () => {
    if (timeout) clearTimeout(timeout)
    this.setState(oldState => ({
      index: oldState.index + 1 >= listImage.length ? 0 : oldState.index + 1
    }))
  }

  handlePreClick = () => {
    if (timeout) clearTimeout(timeout)
    this.setState(oldState => ({
      index: oldState.index - 1 < 0 ? listImage.length - 1 : oldState.index - 1
    }))
  }

  render() {
    return (
      <div className='lp-slideshow-gallery'>
        <div className='container'>
          <button className='action-button pre' onClick={this.handlePreClick}>&#10094;</button>
          <button className='action-button next' onClick={this.handleNextClick}>&#10095;</button>
          {listImage.map((item, idx) => (
            <div
              key={idx}
              className={
                `slide ${idx === this.state.index ? 'active' : ''}`
              }
            >
              <div className='number-text'>
                {`${this.state.index + 1} / ${listImage.length}`}
              </div>
              <img alt={item.title} src={item.src} className='image' />
              <div className='caption-text'>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
