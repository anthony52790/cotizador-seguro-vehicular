import React from 'react';

import './TabContent.scss'

export const TabContent = ({ index, active, children }) => {

  return (
    <div className={`tab-content__item ${active === index ? 'active' : ''}`}>
      {children}
    </div>
  )
}