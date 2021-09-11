/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

const ENV_VARS = {
  APP_NAME: process.env.APP_NAME,
}

module.exports = {
  images: {
    domains: ['i.imgur.com', 'upload.wikimedia.org'],
  },
  env: ENV_VARS,
  publicRuntimeConfig: ENV_VARS,
  poweredByHeader: false,
}
