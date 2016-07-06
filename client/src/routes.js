import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/app'
import UnderConstruction from './components/underConstruction'
import OurStory from './components/ourStory'
import WeddingDay from './components/weddingDay'
import Lodging from './components/lodging'
import WeddingParty from './components/weddingParty'
import Registry from './components/registry'
import Rsvp from './components/rsvp'
import Thankyou from './components/thankyou'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={WeddingDay} /> 
    <Route path="our-story" component={OurStory} />
    <Route path="wedding-party" component={WeddingParty} />
    <Route path="lodging" component={Lodging} />
    <Route path="registry" component={Registry} />
    <Route path="rsvp" component={Rsvp} />
    <Route path="thankyou" component={Thankyou} />
  </Route>
)
