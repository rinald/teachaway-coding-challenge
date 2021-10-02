import React, { useState } from 'react'
import '../styles/Checkbox.css'

type Props = {
  label: string
  enabled: boolean

  // generic toggle handler
  // used to connect to global options state
  onToggle: (enabled: boolean) => void
}

// generic controlled checkbox component
const Checkbox: React.FC<Props> = ({ label, enabled, onToggle }) => {
  const [checked, setChecked] = useState(enabled)

  const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setChecked(!checked) // update checkbox state
    onToggle(!checked) // update global options state
  }

  return (
    <div className='labelWrapper'>
      <span>{label}</span>
      <div className='checkbox'>
        <input type='checkbox' checked={checked} onChange={onChange} />
        <span className='checkmark'></span>
      </div>
    </div>
  )
}

export default Checkbox
