import React from 'react'
import { Sidenav, Cards } from './components' 
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Sidenav} />
          <Route exact path={`${process.env.PUBLIC_URL}/:name`} component={Cards} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App