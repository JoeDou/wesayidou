import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'
import promise from 'redux-promise'

import reducers from './reducers'
import routes from './routes'

import App from './components/app'
import UnderConstruction from './components/underConstruction'
import OurStory from './components/ourStory'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}>
      <Route path="/" component={App}>
        <IndexRoute component={UnderConstruction} />
        <Route path="test" component={OurStory} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.root'))
