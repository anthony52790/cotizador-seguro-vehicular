import React from 'react';

import './AddCover.scss'

export const AddCover = ({ active, setActive, setPrice, totalPrice, addCover }) => {

  const onHandleClick = () => {
    if (active) {
      setActive(false)
      setPrice(totalPrice - addCover)
    } else {
      setActive(true)
      setPrice(totalPrice + addCover)
    }
  }

  return (
    <button onClick={onHandleClick} className='add-coverage'>
      <span className={`${active ? 'enabled' : 'disabled'}`}></span>
      <p>{active ? 'QUITAR' : 'AGREGAR'}</p>
    </button>
  )
}