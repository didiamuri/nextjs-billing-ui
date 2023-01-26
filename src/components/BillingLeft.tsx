import React from 'react'
import { BsDashSquare, BsPlusSquare } from 'react-icons/bs';
import { MdBackHand, MdDelete, MdEdit, MdRemoveRedEye } from 'react-icons/md'
import { ICustomber } from '@src/interfaces';

interface Props {
  customers: Array<ICustomber>;
  expandedRows: ICustomber[];
  isExpanded: (item: ICustomber) => ICustomber | undefined;
  handleExpand: (item: ICustomber) => void;
  handleExpandAll: (items: Array<ICustomber>) => void;
}

const BillingLeft: React.FC<Props> = ({ customers, expandedRows, isExpanded, handleExpand, handleExpandAll }): JSX.Element => {
  return (
    <div className='border rounded-lg h-[66vh] overflow-y-auto overflow-x-hidden scroll-smooth'>
      <div className=''>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-gray-700 border-b-2 font-bold">
            <tr>
              <th scope="col" className="p-2">
                <button onClick={() => handleExpandAll(customers)} className='flex items-center'>
                  {customers.length === expandedRows.length ? <BsDashSquare className='text-red-600' /> : <BsPlusSquare />}
                </button>
              </th>
              <th scope="col" className="p-2 w-1/4">
                VCODE
              </th>
              <th scope="col" className="p-2 w-1/3">
                NAME
              </th>
              <th scope="col" className="p-2 w-1/4">
                STATUS
              </th>
              <th scope="col" className="p-2 w-1/4">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {customers?.map((customer, index) => (
              <React.Fragment>
                <tr key={index} className={`border-b ${isExpanded(customer) ? 'bg-slate-100' : 'bg-white'} border-slate-200`}>
                  <td className="p-2">
                    <button onClick={() => handleExpand(customer)}>
                      {isExpanded(customer) ? <BsDashSquare className='text-red-600' /> : <BsPlusSquare />}
                    </button>
                  </td>
                  <td className="p-2">
                    {customer?.vcode}
                  </td>
                  <td scope="row" className="p-2 font-medium text-gray-900 whitespace-nowrap">
                    {customer?.name}
                  </td>
                  <td className="p-2">
                    {customer?.status}
                  </td>
                  <td className="p-2">
                    <div className='flex gap-2'>
                      <button><MdEdit className='text-yellow-400' /></button>
                      <button><MdBackHand /></button>
                      <button><MdDelete className='text-red-600' /></button>
                    </div>
                  </td>
                </tr>
                {(isExpanded(customer) && customers.length > 0) &&
                  <tr>
                    <td colSpan={4} className='p-2 border'>
                      <div className='px-5 py-2'>
                        <div className='grid grid-cols-3 gap-2'>
                          <div className='col-span-1'>
                            <h2 className='uppercase font-bold'>Customer</h2>
                            <form className='mt-3'>
                              <div className='my-2'>
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-vodafone focus:border-vodafone block w-full p-2" value={'V478888'} placeholder="" readOnly required />
                              </div>
                              <div className="relative my-2">
                                <input type="text" id="floating_outlined" value={'GREAT MINING'} className="block px-2 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-vodafone peer" placeholder=" " />
                                <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-vodafone peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Customer</label>
                              </div>
                              <div className="relative my-2">
                                <textarea id="floating_textarea" value={'Zone minière Kolwezi Province du Maniema'} className="block px-2 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-vodafone peer" placeholder=" " />
                                <label htmlFor="floating_textarea" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-vodafone peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Address</label>
                              </div>
                              <div className="relative my-2">
                                <input type="text" id="floating_outlined2" value={'CLASSE A'} className="block px-2 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-vodafone peer" placeholder=" " />
                                <label htmlFor="floating_outlined2" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-vodafone peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Customer</label>
                              </div>
                              <div className="relative my-2">
                                <input type="text" id="floating_outlined3" value={'3500'} className="block px-2 pb-2 pt-4 w-full font-bold text-right text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-vodafone peer" placeholder=" " />
                                <label htmlFor="floating_outlined3" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-vodafone peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Credit limit</label>
                              </div>
                            </form>
                          </div>
                          <div className='col-span-2'>
                            <h2 className='uppercase font-bold'>Contracts</h2>
                            <div className='mt-3'>
                              <table className="w-full text-sm text-left text-gray-500 border-2">
                                <thead className="text-xs text-gray-700 border-2 font-bold">
                                  <tr>
                                    <th scope="col" className="p-2 border-2 w-1/3">
                                      CONTRACT N°
                                    </th>
                                    <th scope="col" className="p-2 border-2 w-1/4">
                                      START
                                    </th>
                                    <th scope="col" className="p-2 border-2 w-1/4">
                                      END
                                    </th>
                                    <th scope="col" className="p-2 border-2 w-1/4">
                                      ACTIONS
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="bg-white border border-slate-200">
                                    <td className="p-2 border-2"></td>
                                    <th scope="row" className="p-2 border-2 font-medium text-gray-900 whitespace-nowrap"></th>
                                    <td className="p-2 border-2"></td>
                                    <td className="p-2 border-2">
                                      <div className='flex gap-2'>
                                        <button><MdEdit className='text-yellow-400' /></button>
                                        <button><MdRemoveRedEye /></button>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="bg-white border border-slate-200">
                                    <td className="p-2 border-2"></td>
                                    <th scope="row" className="p-2 border-2 font-medium text-gray-900 whitespace-nowrap"></th>
                                    <td className="p-2 border-2"></td>
                                    <td className="p-2 border-2">
                                      <div className='flex gap-2'>
                                        <button><MdEdit className='text-yellow-400' /></button>
                                        <button><MdRemoveRedEye /></button>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="bg-white border border-slate-200">
                                    <td className="p-2 border-2"></td>
                                    <th scope="row" className="p-2 border-2 font-medium text-gray-900 whitespace-nowrap"></th>
                                    <td className="p-2 border-2"></td>
                                    <td className="p-2 border-2">
                                      <div className='flex gap-2'>
                                        <button><MdEdit className='text-yellow-400' /></button>
                                        <button><MdRemoveRedEye /></button>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="bg-white border border-slate-200">
                                    <td className="p-2 border-2"></td>
                                    <th scope="row" className="p-2 border-2 font-medium text-gray-900 whitespace-nowrap"></th>
                                    <td className="p-2 border-2"></td>
                                    <td className="p-2 border-2">
                                      <div className='flex gap-2'>
                                        <button><MdEdit className='text-yellow-400' /></button>
                                        <button><MdRemoveRedEye /></button>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div className='flex items-center justify-end h-32'>
                                <button className='bg-vodafone text-white p-2 rounded-md w-[200px] '>
                                  SUBMIT
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
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

export default BillingLeft