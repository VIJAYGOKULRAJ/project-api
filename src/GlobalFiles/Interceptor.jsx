import axios from "axios"

const baseURL = process.env.REACT_APP_BASEURL
const accessToken =  process.env.REACT_APP_TOKEN

export const baseUrl = axios.create({
    baseURL : `${baseURL}`
})
baseUrl.interceptors.request.use(
    config => {
        config.headers['Authorization'] = 'Bearer ' + accessToken
        config.headers['Content-Type'] = 'application/json';
      return config
    },
    error => {
      Promise.reject(error)
    }
  )

  baseUrl.interceptors.response.use(
    response => {
      return response
    },
    function (error) {  
     if( error.response.status === 401){
        console.log("Un Authorized")
     }
      return Promise.reject(error)
    }
  )