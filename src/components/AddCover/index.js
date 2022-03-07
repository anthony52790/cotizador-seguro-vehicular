import React from 'react';

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
    <button onClick={onHandleClick}>
      <span className='add-coverage'></span>
      <p>{active ? 'QUITAR' : 'AGREGAR'}</p>
    </button>
  )
}