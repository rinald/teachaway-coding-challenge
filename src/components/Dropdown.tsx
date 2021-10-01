import React, { useState } from 'react'
import '../styles/Dropdown.css'

type Props = {
  defaultValue: string
  values: string[]
  onSelect: (value: string) => void
}

const Dropdown: React.FC<Props> = ({ defaultValue, values, onSelect }) => {
  const [value, setValue] = useState(defaultValue)

  const onChange: React.ChangeEventHandler<HTMLSelectElement> = event => {
    setValue(event.target.value)
    onSelect(event.target.value)
  }

  return (
    <div className='dropdown'>
      <select value={value} onChange={onChange}>
        {values.map(val => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
