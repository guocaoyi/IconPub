import axios from 'axios'
import config from '@/config'

import type { App, Plugin } from 'vue'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://127.0.0.1:4001'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = config.host.site
}

/**
 * get method
 */
export const get = (url: string, params = {}) =>
  new Promise((resolve, reject) => {
    axios({
      url,
      method: 'get',
      params,
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })

/**
 * post method
 */
export const post = ({ url = '', data = {}, params = {} }) =>
  new Promise((resolve, reject) => {
    axios({
      url,
      method: 'post',
      data,
      params,
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })

// base
// - timeout & timeout alert
// - common headers
// - baseurl: development \ production

// vue-pluginfiy
// - install

// method
// - option
// - get \ post \ put \ delete \ patch

// type
// - json/application
// - form-data(download \ upload)

// request
// - tracing（set request header uuid）
// - data buried point
// - auth
// - analysis

// response
// - status: 401 \ 428 \ 429 \ 510 \ 511 \ 4x \ 5x
// - alert error.message
// - tracing
// - error check & data
// - analysis
export const requestPlugin: Plugin = {
  install: (app: App, ...options: any[]) => {
    app.provide('request', () => {
      console.info('request', options)
    })
  },
}

export default requestPlugin
