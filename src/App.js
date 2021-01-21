import React, { Component } from 'react'
import './app.scss'
import avartar from './avatar.png'

export default class App extends Component {
  render() {
    return (
      <div className='intro-myself'>
        <div className="container">
          <div className='intro-myself__basic'>
            <div className='intro-myself__basic__avatar'>
              <img src={avartar} alt='avatar' />
            </div>
            <div className='intro-myself__basic__content'>
              <div className='intro-myself__basic__content__title'>Hello world</div>
              <div className='intro-myself__basic__content__subTittle'>My name is ...</div>
            </div>
          </div>
          <div className='intro-myself__content'>
            <div className='intro-myself__content__tile'>
              <h2>Introducing Yourself Self</h2>
              <h2>Introducing with Text Boxes</h2>
            </div>
            <div className='intro-myself__content__line'>
              <div className='circle left' />
              <div className='line' />
              <div className='circle right' />
            </div>
            <div className='intro-myself__content__container'>
              <div className='boxes'>
                <div className='boxes-container'>
                  <h3>TextHere 1</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum magnam minus neque totam sint quo excepturi.</p>
                </div>
              </div>
              <div className='boxes'>
                <div className='boxes-container'>
                  <h3>TextHere 2</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum magnam minus neque totam sint quo excepturi.</p>
                </div>
              </div>
              <div className='boxes'>
                <div className='boxes-container'>
                  <h3>TextHere 3</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum magnam minus neque totam sint quo excepturi.</p>
                </div>
              </div>
              <div className='boxes'>
                <div className='boxes-container'>
                  <h3>TextHere 4</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum magnam minus neque totam sint quo excepturi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
