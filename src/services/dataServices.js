import { api } from './../environments/environments'

export const postData = async (query) => {
  try {
    const res = await fetch(api, {
      method: 'POST',
      body: JSON.stringify(query),
      headers: {
        'Content-type': 'application/json',
      },
    })

    return res.json()
  } catch (error) {
    throw new Error(`[error] ${error}`)
  }
}