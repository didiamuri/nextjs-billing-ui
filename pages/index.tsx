import React, { ReactElement } from 'react'
import AppLayout from '@src/layout'
import Head from 'next/head'

const HomePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Billing - Vodacom DRC</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00a671" />
        <meta name="description" content="Billing - Vodacom DRC" />
        <meta name="author" content="Didierson Amuri" />
      </Head>
      
    </React.Fragment>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return <AppLayout>{page}</AppLayout>
}

export default HomePage