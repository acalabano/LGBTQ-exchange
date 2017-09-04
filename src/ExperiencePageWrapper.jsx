import React from 'react'
import {Route} from 'react-router'
import firebase from 'APP/fire'
const db = firebase.database()

import QuestionPage from './components/QuestionPage'

export default () =>
    <div className='lobbyPage'>
      <QuestionPage fireRef={db.ref('experiences')}/>
  </div>
