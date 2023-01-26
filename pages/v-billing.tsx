import React, { ReactElement } from 'react'
import Head from 'next/head'
import AppLayout from '@src/layout'
import { BillingLeft, BillingRight } from '@src/components'
import { ICustomber, ISpoc, ISubscriber } from '@src/interfaces'
import { customers, spocs, subscribers } from '@src/data'

const VBillingPage = () => {

    const [expandedRows, setExpandedRows] = React.useState<Array<ICustomber>>([]);
    const [expandedSubscriberRows, setExpandedSubscriberRows] = React.useState<Array<ISubscriber>>([]);
    const [expandedSpocRows, setExpandedSpocRows] = React.useState<Array<ISpoc>>([]);

    const isExpanded = (item: ICustomber) => {
        const idx = expandedRows.find(expanded => expanded.id === item.id);
        return idx;
    };

    const isExpandedSubsriber = (item: ISubscriber) => {
        const idx = expandedSubscriberRows.find(expanded => expanded.id === item.id);
        return idx;
    };

    const isExpandedSpoc = (item: ISpoc) => {
        const idx = expandedSpocRows.find(expanded => expanded.id === item.id);
        return idx;
    };

    const handleExpand = (item: ICustomber) => {
        const newExpandedRows = [...expandedRows];
        const indexFound = newExpandedRows.findIndex(newExpanded => newExpanded.id === item.id);

        if (indexFound > -1) newExpandedRows.splice(indexFound, 1);
        else newExpandedRows.push(item);

        setExpandedRows([...newExpandedRows]);
    }

    const handleExpandSubscriber = (item: ISubscriber) => {
        const newExpandedRows = [...expandedSubscriberRows];
        const indexFound = newExpandedRows.findIndex(newExpanded => newExpanded.id === item.id);

        if (indexFound > -1) newExpandedRows.splice(indexFound, 1);
        else newExpandedRows.push(item);

        setExpandedSubscriberRows([...newExpandedRows]);
    }

    const handleExpandSpoc = (item: ISpoc) => {
        const newExpandedRows = [...expandedSpocRows];
        const indexFound = newExpandedRows.findIndex(newExpanded => newExpanded.id === item.id);

        if (indexFound > -1) newExpandedRows.splice(indexFound, 1);
        else newExpandedRows.push(item);

        setExpandedSpocRows([...newExpandedRows]);
    }

    return (
        <React.Fragment>
            <Head>
                <title>Billing - Vodacom DRC</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#00a671" />
                <meta name="description" content="Billing - Vodacom DRC" />
                <meta name="author" content="Didierson Amuri" />
            </Head>
            <div className='flex space-x-3 top-0 bg-slate-600 z-50 py-5 justify-center gap-5 border-b font-bold'></div>
            <div className='px-10 mt-5'>
                <form className='w-1/3'>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-vodafone focus:border-vodafone" placeholder="Search..." required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-vodafone hover:bg-vodafone focus:ring-4 focus:outline-none focus:ring-vodafone font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    </div>
                </form>
                <div className='grid grid-cols-2 gap-2 my-5'>
                    <BillingLeft
                        customers={customers}
                        isExpanded={isExpanded}
                        handleExpand={handleExpand}
                    />
                    <BillingRight
                        subscribers={subscribers}
                        spocs={spocs}
                        isExpandedSubsriber={isExpandedSubsriber}
                        isExpandedSpoc={isExpandedSpoc}
                        handleExpandSubscriber={handleExpandSubscriber}
                        handleExpandSpoc={handleExpandSpoc}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

VBillingPage.getLayout = (page: ReactElement) => {
    return <AppLayout>{page}</AppLayout>
}

export default VBillingPage