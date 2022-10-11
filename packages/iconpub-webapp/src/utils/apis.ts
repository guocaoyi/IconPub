import axios from 'axios'

export * from '@vueuse/integrations/useAxios'
export const axiosInstance = axios.create({
  baseURL: '/api',
})
