import axiosLibrary from 'axios'
const baseURL =
  process.env.REACT_APP_API_URL ||
  'https://db9a-118-70-129-35.ngrok-free.app/api'

const axios = axiosLibrary.create({
  baseURL: baseURL,
  timeout: 600000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'ngrok-skip-browser-warning': 'any',
  },
})

export const getList = async url => {
  try {
    const { data } = await axios.get(url)
    return data.items
  } catch (e) {
    console.log('error', e)
  }
}

export const postRun = async params => {
  try {
    await axios.post('/ansible', params)
  } catch (e) {
    console.log('error', e)
  }
}
