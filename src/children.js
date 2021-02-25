import React from 'react'
export default class ComponentCon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    console.log(props)
    console.log('constructor chạy')
  }

  // componentDidMount() {
  //   console.log('componentDidMount chạy')
  //   setTimeout(() => {
  //     this.setState({
  //       name: 'Duc'
  //     })
  //   }, [5000])
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate chạy')
  //   setTimeout(() => {
  //     this.setState({
  //       name: 'Vu'
  //     })
  //   }, [5000])
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  //   console.log('componentWillReceiveProps chay');
  // }

  componentWillUnmount() {
    console.log('componentWillUnmount chay');
  }

  render() {
    console.log('render')
    return (
      <div className='boxes'>
        <div className='boxes-container'>
          <h3>{this.state.name}</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum magnam minus neque totam sint quo excepturi.</p> */}
        </div>
      </div>
    )
  }
}