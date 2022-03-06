import { useContext, useEffect, useState } from 'react';

import { DataContext } from '../contexts/dataContext'
import { postData } from '../services/dataServices';

export const useService = () => {

  const [data, setData] = useState('')
  const [error, setError] = useState('')
  const { body } = useContext(DataContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await postData(body)
        setData(res)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [body])

  return { data, error }
}