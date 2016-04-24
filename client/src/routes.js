import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/app'
import UnderConstruction from './components/underConstruction'
import OurStory from './components/ourStory'
import WeddingDay from './components/weddingDay'
import Lodging from './components/lodging'
import WeddingParty from './components/weddingParty'

export default (
  <Route path="/">
    <IndexRoute component={UnderConstruction} />
    <Route path="/test" component={App}>
      <IndexRoute component={WeddingDay} />
      <Route path="our-story" component={OurStory} />      
      <Route path="wedding-party" component={UnderConstruction} />
      <Route path="lodging" component={Lodging} />
      <Route path="rsvp" component={UnderConstruction} />
    </Route>
  </Route>
)
