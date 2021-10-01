import React, { useContext } from 'react'

import Checkbox from './Checkbox'
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
        label='Section'
        defaultValue={defaultOptions.section}
        values={['hot', 'top', 'user']}
        onSelect={value =>
          setOptions({ ...options, section: value as SectionOption })
        }
      />
      <Dropdown
        label='Sort'
        defaultValue={defaultOptions.sort}
        values={['viral', 'top', 'time', 'rising']}
        onSelect={value =>
          setOptions({ ...options, sort: value as SortOption })
        }
      />
      <Dropdown
        label='Window'
        defaultValue={defaultOptions.window}
        values={['day', 'week', 'month', 'year', 'all']}
        onSelect={value =>
          setOptions({ ...options, window: value as WindowOption })
        }
      />
      <Checkbox
        label='Show Viral'
        enabled={defaultOptions.showViral}
        onToggle={enabled => setOptions({ ...options, showViral: enabled })}
      />
    </div>
  )
}

export default AppBar
