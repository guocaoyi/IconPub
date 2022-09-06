import axios from 'axios'

import type { App, Plugin } from 'vue'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://icons.dev.pub'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://icons.pub'
}

// get
export const get = ({ url, params = {} }: any) =>
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

// post
export const post = ({ url, data = {}, params = {} }: any) =>
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

// vue-plugin
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
