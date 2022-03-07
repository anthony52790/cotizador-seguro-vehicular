import React from 'react'

import './Tab.scss'

export const Tab = ({ index, action, active, children }) => {

  const onHandleClick = () => {
    action(index)
  }

  return (
    <div className={`tab__item ${active === index ? 'active' : ''}`}>
      <button data-index={index} onClick={onHandleClick}>
        {children}
      </button>
    </div>
  )
}