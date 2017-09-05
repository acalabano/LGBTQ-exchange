import React from 'react'
import {Route} from 'react-router'
import firebase from 'APP/fire'
const db = firebase.database()

import ExperiencePage from './components/ExperiencePage'

export default () =>
    <div className='lobbyPage'>
      <ExperiencePage fireRef={db.ref('experiences')}/>
  </div>
