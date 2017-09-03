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
class Experiences extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      currentN: 6,
      gamesArray: [1, 2, 3, 4, 5],
      didUserAddNewExperiences: false,
      currentUserId: '',
      currentUsername: '',
    }
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
        <div className="row">
          <div className="col-sm-4">
            <form onSubmit={this.onTaskSubmit}>
              <label htmlFor="taskContent" className="mr-sm-2"> Task Content: </label>
            <div className="form-group">
              <input className="form-control" placeholder="Do my project, make a thing" type="text" id="taskContent" defaultValue=""></input>
            </div>
              <button className="btn btn-default" type="submit">Add a Daily Task</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({game}) => ({games: game.games})
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Experiences)
