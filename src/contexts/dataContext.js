import React from 'react'

export const DataContext = React.createContext({
  body: {
    document: '',
    celular: '',
    placa: ''
  },
  setBody: () => { }
})

export const AccordionContext = React.createContext({
  clicked: 0,
  setCLicked: () => { }
})