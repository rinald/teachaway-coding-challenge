import React, { useContext } from 'react'

import Dropdown from './Dropdown'

import { OptionsContext, defaultOptions } from '../App'
import type { SortOption, SectionOption, WindowOption } from '../types'
import '../styles/AppBar.css'

const AppBar: React.FC = () => {
  const [options, setOptions] = useContext(OptionsContext)

  return (
    <div className='appBar'>
      <span className='title'>Imgir</span>
      <Dropdown
        defaultValue={defaultOptions.section}
        values={['hot', 'top', 'user']}
        onSelect={value =>
          setOptions({ ...options, section: value as SectionOption })
        }
      />
      <Dropdown
        defaultValue={defaultOptions.sort}
        values={['viral', 'top', 'time', 'rising']}
        onSelect={value =>
          setOptions({ ...options, sort: value as SortOption })
        }
      />
      <Dropdown
        defaultValue={defaultOptions.window}
        values={['day', 'week', 'month', 'year', 'all']}
        onSelect={value =>
          setOptions({ ...options, window: value as WindowOption })
        }
      />
    </div>
  )
}

export default AppBar
