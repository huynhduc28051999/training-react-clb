import React, { Component } from 'react'

export default class MutipleField extends Component {
  xuLySubmit = (e) => {
    if (e) e.preventDefault()
    // e.target.a.value
    // console.log('zoo')
    const formValue = new FormData(e.target)
    // console.log(formValue.values())
    const value = {}
    for (var key of formValue.entries()) {
      value[key[0]] = key[1]
		// 	console.log(key[0] + ', ' + key[1])
    }
    console.log(value)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.xuLySubmit}>
          <label htmlFor="fname">First name:</label><br/>
          <input id='fname' type="text" name="fname"/><br/><br/>
          <input id='a' type="text" name="a"/><br/><br/>
          <input id='b' type="text" name="b"/><br/><br/>
          <input id='c' type="text" name="c"/><br/><br/>
          <input id='d' type="text" name="d"/><br/><br/>
          <input type='submit' name='submit'/>
        </form>
      </div>
    )
  }
}