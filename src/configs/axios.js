import axiosLibrary from 'axios'

const baseURL =
  process.env.REACT_APP_API_URL ||
  'https://db9a-118-70-129-35.ngrok-free.app/api'

export const axios = axiosLibrary.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getList = async url => {
  try {
    const { data } = await axios.get(url)
    console.log(data)
    return data
  } catch (e) {
    console.warn(e)
  }
}
