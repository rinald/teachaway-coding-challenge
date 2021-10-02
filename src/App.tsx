import React, { useState, createContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import type { Options } from './types'

import Home from './pages/Home'
import AlbumPage from './pages/Album'
import ImagePage from './pages/Image'

// default gallery filter options
const defaultOptions: Options = {
  section: 'hot',
  sort: 'viral',
  window: 'day',
  showViral: true,
}

// top-level options context
const OptionsContext = createContext<
  [Options, React.Dispatch<React.SetStateAction<Options>>]
>([defaultOptions, () => {}])

const App: React.FC = () => {
  // initialize options state with default values
  const [options, setOptions] = useState<Options>(defaultOptions)

  // wrap the app in a global OptionsContext
  // wrap the app using a Router, exposing one static Route
  // and two dynamic Routes
  return (
    <OptionsContext.Provider value={[options, setOptions]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/album/:id'>
            <AlbumPage />
          </Route>
          <Route path='/image/:id'>
            <ImagePage />
          </Route>
        </Switch>
      </Router>
    </OptionsContext.Provider>
  )
}

export default App
export { OptionsContext, defaultOptions }
