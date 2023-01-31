import React from 'react'
import { useMenusStore } from '../stores'
import logo from '../assets/passit.svg'

export default function Head() {
    const { activeMenu, menus } = useMenusStore((state) => state);
    return (
        <div className='w-full  bg-white fixed top-0 right-0 flex justify-between items-center z-10 text-sm md:text-lg py-1 shadow'>
            <ul className='flex items-center'>
                <li className='md:mr-10  ml-5'>
                    <img className='w-10 h-10' src={logo} alt="" />
                </li>
                {menus.map(menu => (
                    <li onClick={() => activeMenu(menu.url)} className={`mx-2 flex group flex-col relative cursor-pointer transition-all transform transition-transform active:scale-95 ${menu.active && 'text-green-500 font-bold'}`}>
                        {menu.name}
                        <div className='w-full h-1 bg-green-500 origin-left scale-0 group-hover:scale-100  absolute -bottom-2 transform transition-transform'></div>
                    </li>
                ))}

            </ul>
            <button className=' hidden md:flex px-5 py-2.5 bg-green-500 text-white m-2 rounded-md'>
                Torne-se motorista
            </button>
        </div>
    )
}
