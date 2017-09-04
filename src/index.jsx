'use strict'
import React from 'react'
import { Route, IndexRedirect, IndexRoute, Link } from 'react-router'
import { PanelGroup, Panel } from 'react-bootstrap'
import WelcomePage from 'APP/app/components/WelcomePage'

import Signup from 'APP/app/components/Signup'
import Signin from 'APP/app/components/Signin'
import QuestionPageWrapper from './QuestionPageWrapper'
import ExperiencePageWrapper from './ExperiencePageWrapper'

// const HomePage = ({ children }) => <div className='homepage-background'>
//   <div className="signin-signup-panel">
//     <Panel header="Sign up" ><Signup /></Panel>
//     <Signin />
//   </div>
// </div>

export default <Route path="/home" component={({ children }) => children}>
  <IndexRoute component={WelcomePage} />
  <Route path='/home' component={WelcomePage} />
  <Route path='/questions' component={QuestionPageWrapper} />
  <Route path='/experiences' component={ExperiencePageWrapper} />
</Route>
