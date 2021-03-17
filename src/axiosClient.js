import axios from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create({
  baseURL: 'https://teambuilding-final.herokuapp.com/',
  headers: {
    'content-type': 'application/json'
  },
  paramsSerializer: param => queryString.stringify(param)
})

axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}` || ''
  return config
})

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data
  }
  return response
}, function(error) {
  if (error.response.status === 401) {
    localStorage.clear('token')
  }
  return Promise.reject(error.response?.data?.message)
})

export default axiosClient