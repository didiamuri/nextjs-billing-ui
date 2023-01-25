import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { MdDeleteOutline, MdModeEdit, MdShare, MdStarRate } from 'react-icons/md'

const CustomerComponent: React.FC = (): JSX.Element => {
    return (
        <div className='grid grid-cols-3 gap-7'>
            <div className='col-span-2 border rounded-lg'>
                <div className='bg-slate-100 p-6 rounded-t-lg border-b'>
                    <h3 className='text-xl text-gray-600 font-light'>Customers</h3>
                    <div className='absolute flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <button className='flex items-center justify-center gap-2 text-white text-sm bg-vodafone p-3 rounded-full w-24'>
                                <BsPlus />
                                <span>New</span>
                            </button>
                            <button className='flex items-center justify-center gap-2 text-black text-sm bg-white border p-1 rounded-full w-16'>
                                <MdModeEdit />
                                <span>Edit</span>
                            </button>
                            <button className='flex items-center justify-center gap-2 text-black text-sm bg-white border p-1 rounded-full'>
                                <MdShare />
                                <span>Export</span>
                            </button>
                        </div>
                    </div>
                    <div className='float-right text-right mt-3'>
                        <button className='flex items-center bg-white rounded-full border p-1 text-yellow-300'>
                            <MdDeleteOutline />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto mt-10 px-10">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 border-b font-bold">
                            <tr>
                                <th scope="col" className="py-3 w-1/4">
                                    Account number
                                </th>
                                <th scope="col" className="py-3 w-1/4">
                                    Name
                                </th>
                                <th scope="col" className="py-3 w-1/4">
                                    Status
                                </th>
                                <th scope="col" className="py-3 w-1/4">
                                    Address
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b border-slate-100">
                                <td className="py-2">
                                    V00001
                                </td>
                                <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap">
                                    Dispromalt RDC
                                </th>
                                <td className="py-2">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-vodafone" />
                                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Unactive</span>
                                    </label>
                                </td>
                                <td className="py-2">
                                    10, Av. Kalamba ngala, Commune de Lemba, KInshasa
                                </td>
                            </tr>
                            <tr className="bg-white border-b border-slate-100">
                                <td className="py-2">
                                    V00001
                                </td>
                                <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap">
                                    First and future
                                </th>
                                <td className="py-2">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-vodafone" />
                                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
                                    </label>
                                </td>
                                <td className="py-2">
                                    10, Av. Kalamba ngala, Commune de Lemba, KInshasa
                                </td>
                            </tr>
                            <tr className="bg-white border-b border-slate-100">
                                <td className="py-2">
                                    V00001
                                </td>
                                <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap">
                                    G4 RDC
                                </th>
                                <td className="py-2">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-vodafone" />
                                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Unactive</span>
                                    </label>
                                </td>
                                <td className="py-2">
                                    10, Av. Kalamba ngala, Commune de Lemba, KInshasa
                                </td>
                            </tr>
                            <tr className="bg-white border-b border-slate-100">
                                <td className="py-2">
                                    V00001
                                </td>
                                <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap">
                                    Dispromalt RDC
                                </th>
                                <td className="py-2">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-vodafone" />
                                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
                                    </label>
                                </td>
                                <td className="py-2">
                                    10, Av. Kalamba ngala, Commune de Lemba, KInshasa
                                </td>
                            </tr>
                            <tr className="bg-white border-b border-slate-100">
                                <td className="py-2">
                                    V00001
                                </td>
                                <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap">
                                    Dispromalt RDC
                                </th>
                                <td className="py-2">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-vodafone" />
                                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
                                    </label>
                                </td>
                                <td className="py-2">
                                    10, Av. Kalamba ngala, Commune de Lemba, KInshasa
                                </td>
                            </tr>
                            <tr className="bg-white border-b border-slate-100">
                                <td className="py-2">
                                    V00001
                                </td>
                                <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap">
                                    Dispromalt RDC
                                </th>
                                <td className="py-2">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-vodafone" />
                                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
                                    </label>
                                </td>
                                <td className="py-2">
                                    10, Av. Kalamba ngala, Commune de Lemba, KInshasa
                                </td>
                            </tr>
                            <tr className="bg-white border-b border-slate-100">
                                <td className="py-2">
                                    V00001
                                </td>
                                <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap">
                                    Dispromalt RDC
                                </th>
                                <td className="py-2">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-vodafone" />
                                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
                                    </label>
                                </td>
                                <td className="py-2">
                                    10, Av. Kalamba ngala, Commune de Lemba, KInshasa
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='col-span-1 flex flex-col gap-7'>
                <div className='col-span-2 border rounded-lg'>
                    <div className='bg-slate-100 p-6 rounded-t-lg border-b'>
                        <h3 className='text-xl text-gray-600 font-light'>Single point of contact</h3>
                        <div className='absolute flex justify-between mt-2'>
                            <div className='flex items-center gap-2'>
                                <button className='flex items-center justify-center gap-2 text-black text-sm bg-white border p-1 rounded-full w-16'>
                                    <MdModeEdit />
                                    <span>Edit</span>
                                </button>
                            </div>
                        </div>
                        <div className='float-right text-right mt-3'>
                            <button className='flex items-center bg-white rounded-full border p-1 text-yellow-300'>
                                <MdDeleteOutline />
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto mt-10 px-10 pb-5">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 border-b font-bold">
                                <tr>
                                    <th scope="col" className="py-3 w-1/2">
                                        Name
                                    </th>
                                    <th scope="col" className="py-3 w-1/2">
                                        MSISDN
                                    </th>
                                    <th scope='col' className='py-3'></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b border-slate-100">
                                    <td className="py-2">
                                        Didierson Amuri
                                    </td>
                                    <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap">
                                        0814444816
                                    </th>
                                    <th>
                                        <div className='flex items-center justify-center border rounded-full p-1 w-7 h-7'>
                                            <MdStarRate className='text-yellow-400' />
                                        </div>
                                    </th>
                                </tr>
                                <tr className="bg-white border-b border-slate-100">
                                    <td className="py-2">
                                        Darelle Bahati
                                    </td>
                                    <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap">
                                        0814444816
                                    </th>
                                    <th>
                                        <div className='flex items-center justify-center border rounded-full p-1 w-7 h-7'>
                                            <MdStarRate className='text-gray-400' />
                                        </div>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='col-span-2 border rounded-lg'>
                    <div className='bg-slate-100 p-6 rounded-t-lg border-b'>
                        <h3 className='text-xl text-gray-600 font-light'>Subscribers</h3>
                        <div className='absolute flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <button className='flex items-center justify-center gap-2 text-white text-sm bg-vodafone p-3 rounded-full w-24'>
                                    <BsPlus />
                                    <span>New</span>
                                </button>
                                <button className='flex items-center justify-center gap-2 text-black text-sm bg-white border p-1 rounded-full w-16'>
                                    <MdModeEdit />
                                    <span>Edit</span>
                                </button>
                                <button className='flex items-center justify-center gap-2 text-black text-sm bg-white border p-1 rounded-full'>
                                    <MdShare />
                                    <span>Export</span>
                                </button>
                            </div>
                        </div>
                        <div className='float-right text-right mt-3'>
                            <button className='flex items-center bg-white rounded-full border p-1 text-yellow-300'>
                                <MdDeleteOutline />
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto mt-10 px-10 pb-5">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 border-b font-bold">
                                <tr>
                                    <th scope="col" className="py-3 w-1/2">
                                        MSISDN
                                    </th>
                                    <th scope="col" className="py-3 w-1/2">
                                        Name
                                    </th>
                                    <th scope="col" className="py-3 w-1/2">
                                        Type
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b border-slate-100">
                                    <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap">
                                        0814444816
                                    </th>
                                    <td className="py-2">
                                        Didierson Amuri
                                    </td>
                                    <th scope="row" className="py-2 font-light text-gray-900 whitespace-nowrap">
                                        Postpaid
                                    </th>
                                </tr>
                                <tr className="bg-white border-b border-slate-100">
                                    <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap">
                                        0814444816
                                    </th>
                                    <td className="py-2">
                                        Darelle Bahati
                                    </td>
                                    <th scope="row" className="py-2 font-light text-gray-900 whitespace-nowrap">
                                        Postpaid
                                    </th>
                                </tr>
                                <tr className="bg-white border-b border-slate-100">
                                    <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap">
                                        0814444816
                                    </th>
                                    <td className="py-2">
                                        Kevin Amuri
                                    </td>
                                    <th scope="row" className="py-2 font-light text-gray-900 whitespace-nowrap">
                                        Postpaid
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerComponent