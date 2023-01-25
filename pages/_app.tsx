import React, { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import '../styles/globals.css'

type PageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface BillingAppProps extends AppProps {
  Component: PageWithLayout;
}

const BillingApp = (props: BillingAppProps) => {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <React.Fragment>
      {getLayout(<Component {...pageProps} />)}
    </React.Fragment>
  )
}

export default BillingApp
