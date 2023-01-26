import React from 'react'
import { ISpoc, ISubscriber } from '@src/interfaces';
import { BsDashSquare, BsPlusSquare } from 'react-icons/bs';

interface Props {
    subscribers: Array<ISubscriber>;
    spocs: Array<ISpoc>;
    isExpandedSubsriber: (item: ISubscriber) => ISubscriber | undefined;
    isExpandedSpoc: (item: ISpoc) => ISpoc | undefined;
    handleExpandSubscriber: (item: ISubscriber) => void;
    handleExpandSpoc: (item: ISpoc) => void;
}

const BillingRight: React.FC<Props> = ({ subscribers, spocs, isExpandedSubsriber, isExpandedSpoc, handleExpandSubscriber, handleExpandSpoc }): JSX.Element => {
    return (
        <div className='grid grid-cols-5 gap-2'>
            <div className='col-span-3 border rounded-lg h-[66vh] overflow-y-auto overflow-x-auto scroll-smooth'>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 border-b-2 font-bold">
                        <tr>
                            <th scope="col" className="p-2">
                                MSISDN
                            </th>
                            <th scope="col" className="p-2">
                                SUBSCRIBER NAME
                            </th>
                            <th scope="col" className="p-2">
                                TYPE
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {subscribers?.map((subscriber, index) => (
                            <React.Fragment>
                                <tr key={index} className={`border-b text-sm ${isExpandedSubsriber(subscriber) ? 'bg-slate-100' : 'bg-white'} border-slate-200`}>
                                    <td className="p-2">
                                        <div className='flex gap-2'>
                                            <button onClick={() => handleExpandSubscriber(subscriber)}>
                                                {isExpandedSubsriber(subscriber) ? <BsDashSquare className='text-red-600' /> : <BsPlusSquare />}
                                            </button>
                                            <span>{subscriber?.msisdn}</span>
                                        </div>
                                    </td>
                                    <td scope="row" className="p-2 font-medium text-gray-900 whitespace-nowrap">
                                        {subscriber?.name}
                                    </td>
                                    <td className="p-2">
                                        <span className='uppercase'>{subscriber?.type}</span>
                                    </td>
                                </tr>
                                {(isExpandedSubsriber(subscriber) && subscribers.length > 0) &&
                                    <tr>
                                        <td colSpan={4} className='p-2 border'>
                                            <div className='px-5 py-2 h-32'>

                                            </div>
                                        </td>
                                    </tr>
                                }
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='col-span-2 border rounded-lg h-[66vh] overflow-y-auto overflow-x-hidden scroll-smooth'>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 border-b-2 font-bold">
                        <tr>
                            <th scope="col" className="p-2">
                                SPOC NAME
                            </th>
                            <th scope="col" className="p-2">
                                MSISDN
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {spocs?.map((spoc, index) => (
                            <React.Fragment>
                                <tr key={index} className={`border-b text-sm ${isExpandedSpoc(spoc) ? 'bg-slate-100' : 'bg-white'} border-slate-200`}>
                                    <td className="p-2">
                                        <div className='flex gap-2'>
                                            <button onClick={() => handleExpandSpoc(spoc)}>
                                                {isExpandedSpoc(spoc) ? <BsDashSquare className='text-red-600' /> : <BsPlusSquare />}
                                            </button>
                                            <span>{spoc?.name}</span>
                                        </div>
                                    </td>
                                    <td scope="row" className="p-2 font-medium text-gray-900 whitespace-nowrap">
                                        {spoc?.msisdn}
                                    </td>
                                </tr>
                                {(isExpandedSpoc(spoc) && spocs.length > 0) &&
                                    <tr>
                                        <td colSpan={4} className='p-2 border'>
                                            <div className='p-2'>
                                                <form>
                                                    <div className="relative my-2">
                                                        <input type="text" id="floating_outlined" value={spoc.name} className="block px-2 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-vodafone peer" placeholder=" " />
                                                        <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-vodafone peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name</label>
                                                    </div>
                                                    <div className="relative my-2">
                                                        <input type="text" id="floating_outlined2" value={spoc.email} className="block px-2 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-vodafone peer" placeholder=" " />
                                                        <label htmlFor="floating_outlined2" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-vodafone peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                                                    </div>
                                                    <div className="relative my-2">
                                                        <textarea id="floating_textarea" value={spoc.address} className="block px-2 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-vodafone peer" placeholder=" " />
                                                        <label htmlFor="floating_textarea" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-vodafone peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Address</label>
                                                    </div>
                                                    <button className='bg-vodafone text-white p-2 rounded-md w-full '>
                                                        SUBMIT
                                                    </button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                }
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BillingRight