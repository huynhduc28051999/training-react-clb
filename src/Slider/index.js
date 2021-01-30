import React from 'react';
import './style.scss'

class Slider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      color: 0,
      arrayColor: ['#cd0000','yellow','pink','green']
    }
  }
  nextImg = () => {
    if(this.state.color <3){
      this.setState({
        color: this.state.color + 1
      })
    } else {
      this.setState({
        color:0
      })
    }
    
  }
  preImg = () => {
    if(this.state.color > 0){
      this.setState({
        color: this.state.color - 1
      })
    } else {
      this.setState({
        color: 3
      })
    }
  }
  render(){
    const {arrayColor} = this.state;
    const {color} = this.state;
    return(
      <div className="slider" style={{
        backgroundColor:arrayColor[color]
      }}>
        <button className="btn-previos" onClick={() => this.preImg()}>&#60;</button>
        <button className="btn-next" onClick={() => this.nextImg()}>&#62;</button>
      </div>
    )
  }
}

export default Slider