import React, { useContext, useMemo, useRef } from 'react';

import './Accordion.scss'
import { AccordionContext } from '../../contexts/dataContext';

export const AccordionDetails = ({ children, dataIndex }) => {
  const myRef = useRef();
  const { clicked } = useContext(AccordionContext)
  const active = clicked === dataIndex

  const height = useMemo(() => {
    return active ? myRef?.current?.scrollHeight : '35px'
  }, [active])

  return (
    <div
      className='accordion__details'
      ref={myRef}
      style={{ 'height': height }}
    >
      {children}
    </div>
  )
}

export const AccordionSummary = ({ children, dataIndex }) => {
  const { clicked, setCLicked } = useContext(AccordionContext)
  const handleToogle = (dataIndex) => setCLicked(dataIndex)

  return (
    <div className='accordion__summary'>
      <div className='accordion__action' onClick={() => { handleToogle(dataIndex) }}>
        {children}
        <span className={`icon-arrow ${clicked === dataIndex ? 'up' : 'down'}`}></span>
      </div>
    </div>
  )
}

export const AccordionItem = ({ children }) => {
  return (
    <div className='accordion__item'>
      {children}
    </div>
  )
}