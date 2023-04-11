import axiosLibrary from 'axios'

const baseURL =
  process.env.REACT_APP_API_URL ||
  'https://36a4-118-70-129-35.ngrok-free.app/api'

export const axios = axiosLibrary.create({
  baseURL: baseURL,
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
