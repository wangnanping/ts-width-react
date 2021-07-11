import React from 'react'
import styles from './App.module.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  HomePage,
  SignInPage,
  RegisterPage,
  DetailPage,
  Schedule,
  WonderfulReplay,
  ScheduleMsg
} from './pages'

function App () {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signIn' component={SignInPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/WonderfulReplay' component={WonderfulReplay} />
          <Route path='/ScheduleMsg' component={ScheduleMsg} />
          <Route path='/detail/:touristRouteId' component={DetailPage} />
          <Route render={() => <h1>404 not found 页面去火星了 ！</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
