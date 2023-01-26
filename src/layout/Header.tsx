import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineUser } from 'react-icons/ai'
import { MdGroup, MdStickyNote2 } from 'react-icons/md'
import { FaCogs } from 'react-icons/fa'

interface Props {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<Props> = ({ open, setOpen }) => {

    const router = useRouter();

    const menus = [
        {
            title: "Customers",
            icon: <MdGroup className='nav-icon' />,
            href: '/customers'
        },
        {
            title: "Billing",
            icon: <MdStickyNote2 className='nav-icon' />,
            href: '/v-billing'
        },
        {
            title: "Configuration",
            icon: <FaCogs className='nav-icon' />,
            href: '/configuration'
        },
    ]

    return (
        <div className='bg-vodafone'>
            <div className='flex justify-between items-center w-full px-10'>
                <div className='relative flex justify-center items-center gap-4'>
                    <img src="logo.png" className='w-12 h-12 border border-white rounded-full' alt="logo" />
                </div>
                <div className='absolute ml-16'>
                        <span className='text-white text-xs'>Postpaid Customers</span>
                        <h2 className='text-lg font-bold'>Billing Vodacom DRC</h2>
                    </div>
                <div className='flex justify-center items-center gap-3'>
                    {menus.map((menu, index) => (
                        <Link href={menu.href} key={index}>
                            <button className={`flex justify-center items-center gap-2 px-2 py-3 m-0 ${router.route === menu.href ? 'text-white font-bold border-b-8 border-slate-600' : 'text-gray-800 font-normal'}`}>
                                <span>{menu.icon}</span>
                                <span>{menu.title}</span>
                            </button>
                        </Link>
                    ))}
                </div>
                <div className='flex items-center gap-2'>
                    <img src="fr.png" className='w-6 h-6 rounded-full border border-white' alt="flag" />
                    <AiOutlineUser size={25} className='text-gray-800' />
                </div>
            </div>
        </div>
    )
}

export default Header