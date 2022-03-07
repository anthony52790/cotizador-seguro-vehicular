import React from 'react';

import './InputText.scss'

export const InputText = ({
  className,
  placeholder,
  type,
  name,
  id,
  maxlength,
  state,
  setState,
  textError,
  expReg }) => {

  const onChange = (e) => {
    setState({ ...state, value: e.target.value });
  }

  const validate = () => {
    if (expReg) {
      if (expReg.test(state.value)) {
        setState({ ...state, valid: 'true' });
      } else {
        setState({ ...state, valid: 'false' });
      }
    }
  }

  return (
    <div className={className}>
      <div className='input-field'>
        <input
          placeholder={placeholder}
          type={type}
          name={name}
          id={id}
          maxLength={maxlength}
          className={className}
          value={state.value}
          onChange={onChange}
          onKeyUp={validate}
          onBlur={validate}
        />
      </div>
      {state.valid === 'false' ? <span className="show-error">{textError}</span> : <></>}
    </div>
  )
}