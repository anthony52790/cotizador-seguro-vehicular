import React from 'react';

import './Button.scss'

export const Button = ({
  className,
  onClick,
  children
}) => {

  return (
    <div className='button'>
      <button
        className={`btn ${className}`}
        onClick={onClick}
      >{children}</button>
    </div>
  )
}