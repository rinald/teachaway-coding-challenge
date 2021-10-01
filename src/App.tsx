import React, { useState, createContext } from 'react'

import type { Options } from './types'
import Home from './pages/Home'

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
      <Home />
    </OptionsContext.Provider>
  )
}

export default App
export { OptionsContext }
