import { AuthResponse } from "@/models/response/AuthResponse";
import axios, { AxiosRequestConfig } from "axios";

export const API_URL = 'http://localhost:5000/api'

const $api = axios.create({
  // withCredentials: true,
  baseURL: API_URL
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

$api.interceptors.response.use((config) => {
  return config
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status == 401 && error.config && !error.config._isRetry) {
    console.log('пришел 401')
    originalRequest._isRetry = true
   try {
    const response = await axios.post<AuthResponse>(`${API_URL}/auth/refresh`,{}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token/refresh')}`
      }
    })
    localStorage.setItem('token', response.data.accessToken)
    localStorage.setItem('token/refresh', response.data.refreshToken)
    return $api.request(originalRequest)
   } catch (e) {
    console.log(e)
   }
  }
  throw error;
})
export default $api;