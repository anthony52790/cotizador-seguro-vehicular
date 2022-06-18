import React from 'react';

import './Header.scss'

export const Header = () => {
  return (
    <div className='header'>
      <div className='header__content'>
        <div className='header__logo'>
          <a href='/'>
            LOGO
          </a>
        </div>
        <div className='header__links'>
          <div className='header__link-answer'>
            <a href='/'>
              <span>¿Tienes alguna duda?</span>
            </a>
          </div>
          <div className='header__link-phone'>
            <a href='tel:0112345678'>
              <div className='header__link-phone-number'>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.19156 9.11128C3.71293 6.9891 3.17165 5.77957 4.53288 4.82179C5.70358 3.99795 5.62608 3.9062 4.5732 1.86128C3.60033 -0.0280594 3.19506 -0.516622 1.85577 0.568404C-1.12279 2.6486 -0.33 6.02436 2.90969 10.6741C6.14939 15.3241 9.15426 17.2288 12.0384 15.1834C13.511 14.2897 13.1928 13.7398 11.7589 12.1751C10.2069 10.4814 10.1326 10.3974 8.9817 11.2074C7.64054 12.1511 6.67018 11.2334 5.19156 9.11128Z" fill="#6F7DFF" />
                </svg>
                <span>(01) 123 45678</span>  
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}