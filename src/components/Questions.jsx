'use strict'
import React from 'react'
import { Route, IndexRedirect, IndexRoute, Link } from 'react-router'
import { connect, Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {createGame, removeGame} from '../reducers/game'
import reducer from '../reducers'
import firebase from 'APP/fire'

let n = 5
let added = false
class Questions extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ currentUserId: user.uid, currentUsername: user.displayName })
      }
    })
    console.log('LOBBYYYYY DIDMOUNT', this.props)
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = ({game}) => ({games: game.games})
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Questions)
