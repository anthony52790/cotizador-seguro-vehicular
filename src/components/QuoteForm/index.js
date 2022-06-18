import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

import './QuoteForm.scss'
import { InputText } from '../InputText';
import { Checkbox } from '../Checkbox';
import { Button } from '../Button';

import { DataContext } from '../../contexts/dataContext'
import { regexp } from '../../utils/constantes'

export const QuoteForm = () => {

  const [document, setDocument] = useState({ value: '', valid: '' })
  const [phone, setPhone] = useState({ value: '', valid: '' })
  const [placa, setPlaca] = useState({ value: '', valid: '' })
  const [isChecked, setIsChecked] = useState(true)
  const { setBody } = useContext(DataContext)
  const navigate = useNavigate();

  const onHandleChecked = () => {
    setIsChecked(!isChecked)
  }

  const onHandleSubmit = (event) => {
    event.preventDefault()

    if (document.valid === 'true' && phone.valid === 'true' && placa.valid === 'true' && isChecked) {

      setBody({
        document: document.value,
        celular: phone.value,
        placa: placa.value
      })

      navigate('/arma-tu-plan')
    }
  }

  return (
    <div className='qoute-form'>
      <div className='quote-form__content'>
        <form onSubmit={onHandleSubmit}>
          <h2>Déjanos tus datos</h2>
          <div className='quote-form__box'>
            <div className='quote-form__inputs'>
              <div className='quote-form__input'>
                <div className='container-selectinput'>
                  <div className='input-field select'>
                    <select className='customSelect' name='documentSelected'>
                      <option value='dni' text='DNI'>DNI</option>
                    </select>
                  </div>
                  <InputText
                    className='input-custom'
                    placeholder='Nro de doc.'
                    type='text'
                    name='documento'
                    id='documento'
                    maxlength='8'
                    state={document}
                    setState={setDocument}
                    textError='*Ingrese un número de documento válido'
                    expReg={regexp.document}
                  />
                </div>
              </div>
              <div className='quote-form__input'>
                <InputText
                  placeholder='Celular'
                  type='text'
                  name='celular'
                  id='documento'
                  maxlength='9'
                  state={phone}
                  setState={setPhone}
                  textError='*Tu número de celular es inválido'
                  expReg={regexp.phone}
                />
              </div>
              <div className='quote-form__input'>
                <InputText
                  placeholder='Placa'
                  type='text'
                  name='placa'
                  id='placa'
                  maxlength='7'
                  state={placa}
                  setState={setPlaca}
                  textError='Error!'
                  expReg={regexp.placa}
                />
              </div>
            </div>
            <div className='quote-form__checkbox'>
              <div className='quote-form__checkbox-content'>
                <Checkbox id='check' name='check' checked={isChecked} onChange={onHandleChecked} />
                <label htmlFor="ppdp">
                  <p>
                    Acepto la <a href='/'>Política de Protección de Datos Personales</a> y los <a href='/'>Términos y Condiciones.</a>
                  </p>
                </label>
              </div>
              {!isChecked && <span className="show-error">Debe confirmar la política de privacidad</span>}
            </div>
            <div className='quote-form__footer'>
              <Button className='btn-red'>COTÍZALO</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}