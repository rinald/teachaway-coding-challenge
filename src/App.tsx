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

const OptionsContext = createContext<
  [Options, React.Dispatch<React.SetStateAction<Options>>]
>([defaultOptions, () => {}])

const App: React.FC = () => {
  const [options, setOptions] = useState<Options>(defaultOptions)

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
