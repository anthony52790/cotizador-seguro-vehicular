import React from 'react';

import './Home.scss'
import { QuoteForm } from '../../components/QuoteForm';

export const Home = () => {
  return (
    <div className='home'>
      <div className='home__content'>
        <div className='home__banner'>
          <div className='home__banner-background'>
            <div className='home__banner-box'>
              <div className='home__banner-logo' />
              <div className='home__banner-description'>
                <h3>¡NUEVO!</h3>
                <h1>Seguro <span>Vehicular tracking</span></h1>
                <p>Cuentanos donde le haras seguimiento a tu seguro</p>
              </div>
            </div>
          </div>
        </div>
        <div className='home__form'>
          <QuoteForm />
        </div>
      </div>
    </div>
  )
}