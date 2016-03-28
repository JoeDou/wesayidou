import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/app'
import UnderConstruction from './components/underConstruction'
import OurStory from './components/ourStory'
import WeddingDay from './components/weddingDay'
import Lodging from './components/lodging'

export default (
  <Route path="/">
    <IndexRoute component={UnderConstruction} />
    <Route path="/test" component={App}>
      <IndexRoute component={OurStory} />
      <Route path="wedding-day" component={WeddingDay} />
      <Route path="wedding-party" component={UnderConstruction} />
      <Route path="lodging" component={Lodging} />
      <Route path="rsvp" component={UnderConstruction} />
    </Route>
  </Route>
)
