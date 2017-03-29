import React from 'react'
import Head from 'next/head'
import NavBar from './navbar'

export default ({ children }) => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>App</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      <link href="/static/normalize.css" rel="stylesheet" />
      <link href="/static/main.css" rel="stylesheet" />
    </Head>

    <NavBar />

    {children}
  </div>
)
