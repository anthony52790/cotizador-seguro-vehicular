import React from 'react';

import './SpinnerPrice.scss'

export const SpinnerPrice = ({
  state,
  setState,
  symbol,
  priceMin,
  priceMax,
  iteration }) => {

  const onHandleClick = (event) => {
    const { innerText } = event.target
    if (innerText === '-') {
      if (state > priceMin) {
        setState(state - iteration)
      }
      return
    } else if (innerText === '+') {
      if (state < priceMax) {
        setState(state + iteration)
      }
      return
    }
  }

  return (
    <div className='spinner-price__amount'>
      <div className='spinner-price__amount-box'>
        <button className="min btn-down" onClick={onHandleClick}>-</button>
        <input className="num js-cantidad" onChange={() => { }} type="text" value={`${symbol} ${state.toLocaleString('en')}`} />
        <button className="max btn-up" onClick={onHandleClick}>+</button>
      </div>
    </div>
  )
}