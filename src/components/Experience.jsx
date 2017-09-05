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
    this.onExperienceSubmit=this.onExperienceSubmit.bind(this)
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ currentUserId: user.uid, currentUsername: user.displayName })
      }
    })
    console.log('LOBBYYYYY huuu new one', this.props)
  }

  onExperienceSubmit(event) {
    event.preventDefault()
    let ExperienceInfo = {
      content: event.target.experienceContent.value,
      likes: 0
    }
    this.props.addATask(ExperienceInfo.content, ExperienceInfo.likes)
    event.target.experienceContent.value=''
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={this.onExperienceSubmit}>
            <div className="form-group">
              <textarea className="form-control" cols="40" rows="5" placeholder="Share your experience or stories here.  The more colorful, the more rainbow likes!" type="text" id="experienceContent" defaultValue=""></textarea>
            </div>
              <button className="btn btn-default" type="submit">Share your experience!</button>
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
