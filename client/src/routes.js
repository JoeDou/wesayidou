import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/app'
import UnderConstruction from './components/underConstruction'
import OurStory from './components/ourStory'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={UnderConstruction} />
    <Route path="test" component={OurStory} />
  </Route>
)
