import axiosLibrary from 'axios'

const baseURL = process.env.REACT_APP_API_URL || 'localhost'

export const axios = axiosLibrary.create({
  baseURL: baseURL,
})

export const getList = async url => {
  try {
    const { data } = await axios.get(url)
    return data
  } catch (e) {
    console.warn(e)
  }
}
