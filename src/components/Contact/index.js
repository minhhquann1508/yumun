import { faEnvelope, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Contact() {
    return (
        <section id='contact' style={{ background: '#faf4f0' }} className='py-20'>
            <div className='w-4/5 mx-auto flex justify-center'>
                <div>
                    <h1 className='font-bold text-2xl mb-5 text-center' style={{ color: '#7f6c55' }}>Thông tin liên hệ</h1>
                    <ul className='flex flex-col gap-3'>
                        <li className='flex items-center gap-3'>
                            <FontAwesomeIcon icon={faLocationArrow} />
                            <span>620 Sư Vạn Hạnh, Phường 10, Quận 10, Thành phố Hồ Chí Minh</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>glamourbeauty2023@gmail.com</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>(+84) 927 927 927</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    )
}
