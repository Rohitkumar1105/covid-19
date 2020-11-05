import React, { useEffect } from 'react'
import { Sidenav, Cards, ErrorBoundary } from './components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider, useDispatch } from 'react-redux'
import store from './store'

import { fetchData, fetchPastData } from './action/getCoronaData_action'

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
    dispatch(fetchPastData())
  }, [dispatch])

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Sidenav} />
          <Route exact path={`${process.env.PUBLIC_URL}/:name`} component={Cards} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default AppWrapper