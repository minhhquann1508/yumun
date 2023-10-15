import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Navigate from '../Navigate'
export default function Header() {
    const [isShow, setIsShow] = useState(false);
    return (
        <>
            <div className='p-3 shadow-md shadow-zinc-500' style={{ background: '#faf4f0' }}>
                <header className='w-4/5 mx-auto flex justify-between items-center'>
                    <a href="" className='block'>
                        <img src="../img/logo_glamour.jpg" width={150} height={150} alt="logo" />
                    </a>
                    <button className='hover:scale-110 duration-200' onClick={() => setIsShow(true)}>
                        <FontAwesomeIcon className='text-2xl' style={{ color: '#7f6c55' }} icon={faBars}></FontAwesomeIcon>
                    </button>
                </header>
            </div>
            {/* <p className='hidden md:block text-center text-white py-2 text-sm' style={{ background: '#7f6c55' }}>Free Ship Cho Đơn Hàng Có Hóa Đơn Trên 900.000đ</p> */}
            {isShow ? <Navigate setIsShow={setIsShow} /> : ''}
        </>

    )
}
