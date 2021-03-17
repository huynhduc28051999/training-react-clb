import React, { Component } from 'react'
import './app.scss'
import axiosClient from './axiosClient'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuth: localStorage.getItem('token'),
      listGroup: []
    }
  }
  componentDidMount() {
    this.getAllGroup()
  }
  getAllGroup = () => {
    axiosClient.get('/group/get-all-group')
    .then((data) => {
      this.setState({ listGroup: data.data })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  handleSubmit = (e) => {
    if (e) e.preventDefault()
    const formValue = new FormData(e.target)
    const value = {}
    for (var key of formValue.entries()) {
      value[key[0]] = key[1]
    }
    axiosClient.post('/auth/login', value)
    .then((data) => {
      console.log(data.token);
      localStorage.setItem('token', data.token)
      this.setState({ isAuth: true })
    })
    .catch(function (error) {
      this.setState({ isAuth: false })
    });
  }
  render() {
    return (
      <div>
        {!this.state.isAuth ? (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='username'>email</label>
            <input id='username' name='email' /><br/>
            <label htmlFor='password'>password</label>
            <input id='password' name='password' /><br/>
            <input type='submit' name='submit'/>
          </form>
        ) : (
          <div style={{ width: '100%' }}>
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>avatar</th>
                  <th>Mô tả</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.listGroup.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.name}</td>
                    <td>{item.avatar}</td>
                    <td>{item.description}</td>
                    <td><button>xóa</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    )
  }
}
