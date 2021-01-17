"use strict"

import Vue from 'vue'
import axios from 'axios'
// import Store from '@/store'

let config = {
  baseURL: process.env.VUE_APP_APIURL || '', // Variable de entorno
}

export const httpClient = axios.create(config)

Plugin.install = function(Vue) {  // Tuve que eliminarlo, originalmente dice 'function (Vue, options)'
  Vue.axios = httpClient,
  window.axios = httpClient,
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return httpClient
      },
    },
    $axios: {
      get() {
        return httpClient
      },
    },
  })
}

Vue.use(Plugin)

export default Plugin
