import React, { Component, Suspense, lazy } from 'react'
import './app.scss'
import avartar from './avatar.png'
import {
  BrowserRouter as Router, // bao boc app cua minh
  Switch, // switch 
  Route, // case => path, exact 
  Link // <a></a> 
} from "react-router-dom"
const HomePage = lazy(() => import('./homePage'))
const PageLogin = lazy(() => import('./pageLogin'))
export default class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' render={props => (
              <HomePage {...props} />
            )}/>
            <Route path='/login' render={props => (
              <PageLogin {...props} />
            )}/>
          </Switch>
        </Suspense>
      </Router>
    )
  }
}
