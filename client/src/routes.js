import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/app'
import underConstruction from './components/underConstruction'
import ourStory from './components/ourStory'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={underConstruction} />
    <Route path="test" component={underConstruction} />
  </Route>
)
