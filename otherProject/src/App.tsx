import React from 'react'
import styles from './App.module.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage, DetailPage } from './pages'

function App () {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signIn' render={() => <h1>登录页面</h1>}></Route>
          <Route path='/detailePage/:id' component={DetailPage}></Route>
          <Route render={() => <h1>404 not found</h1>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
