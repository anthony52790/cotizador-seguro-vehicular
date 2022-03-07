import React from 'react';

import './Checkbox.scss'

export const Checkbox = ({ id, name, checked, onChange }) => {
  return (
    <div className="checkbox">
      <input type='checkbox' id={id} name={name} checked={checked} onChange={onChange} />
      <label htmlFor="check"></label>
    </div>
  )
}