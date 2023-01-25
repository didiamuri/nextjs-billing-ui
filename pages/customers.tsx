import React, { ReactElement } from 'react'
import AppLayout from '@src/layout'
import { CustomerComponent } from '@src/components';
import Head from 'next/head';

const CustomersPage = () => {

    const tabs = [
        {
            label: 'Administration',
            content: <CustomerComponent />
        },
        {
            label: 'Multi-accounts',
            content: 'Multi-accounts'
        },
        {
            label: 'Dashboard',
            content: 'Dashboard'
        }
    ]

    const [activeTabIndex, setActiveTabIndex] = React.useState<number>(0);

    return (
        <React.Fragment>
            <Head>
                <title>Billing - Vodacom DRC</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#00a671" />
                <meta name="description" content="Billing - Vodacom DRC" />
                <meta name="author" content="Didierson Amuri" />
            </Head>

            <div className=''>
                <div className='flex space-x-3 top-0 bg-slate-600 z-50 justify-center gap-5 border-b font-bold'>
                    {tabs?.map((tab, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTabIndex(idx)}
                            className={`flex items-center justify-center gap-2 py-2 border-b-2 text-sm transition-colors duration-300 ${idx === activeTabIndex ? 'border-red-400 text-default-green font-bold text-red-400' : 'border-transparent hover:border-gray-300 font-light text-white'}`}>
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className='py-4 mt-1 pt-5 px-10'>
                    {tabs[activeTabIndex].content}
                </div>
            </div>
        </React.Fragment>
    )
}

CustomersPage.getLayout = (page: ReactElement) => {
    return <AppLayout>{page}</AppLayout>
}

export default CustomersPage