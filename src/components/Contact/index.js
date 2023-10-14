import { faEnvelope, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Contact() {
    return (
        <section id='contact' style={{ background: '#faf4f0' }} className='py-20'>
            <div className='w-4/5 mx-auto grid md:grid-cols-2 gap-10'>
                <div>
                    <h1 className='font-bold text-2xl mb-5' style={{ color: '#7f6c55' }}>Thông tin liên hệ</h1>
                    <ul className='flex flex-col gap-3'>
                        <li className='flex items-center gap-3'>
                            <FontAwesomeIcon icon={faLocationArrow} />
                            <span>TP.HCM</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>minhhquann1508@gmail.com</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>(+84) 383 138 897</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold text-2xl mb-5' style={{ color: '#7f6c55' }}>Gửi thông tin để đặt trước</h1>
                    <form className='shadow-md border rounded-md overflow-hidden w-fit'>
                        <input type="text" className='p-2 focus:outline-none outline-none' placeholder='abc@@gmail.com' />
                        <button className='text-white p-2 hover:scale-105 duration-200' style={{ background: '#7f6c55' }}>Gửi</button>
                    </form>
                </div>
            </div>
        </section>

    )
}
