import React from 'react'

export const DataContext = React.createContext({
  body : {
    document: '',
    celular: '',
    placa: ''
  },
  setBody: () => {}
})