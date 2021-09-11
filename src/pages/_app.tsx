/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { AppProps } from 'next/app'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime'

import '@src/styles/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App
