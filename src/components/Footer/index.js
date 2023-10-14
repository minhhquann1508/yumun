import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
    return (
        <footer className='py-10' style={{ background: '#7f6c55' }}>
            <div className='w-1/3 mx-auto text-center'>
                <ul className='flex gap-5 justify-center mb-5'>
                    <li>
                        <FontAwesomeIcon className='cursor-pointer text-2xl text-white hover:scale-105 duration-200' icon={faFacebook} />
                    </li>
                    <li>
                        <FontAwesomeIcon className='cursor-pointer text-2xl text-white hover:scale-105 duration-200' icon={faInstagram} />
                    </li>
                    <li>
                        <FontAwesomeIcon className='cursor-pointer text-2xl text-white hover:scale-105 duration-200' icon={faTiktok} />
                    </li>
                </ul>
                <p className='text-sm text-white'>© 2023 Glamour™. All rights reserved.</p>
            </div>
        </footer>
    )
}
