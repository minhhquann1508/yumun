import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSpring, animated } from '@react-spring/web'
import React from 'react'

export default function Navigate(props) {
    const openAnimation = useSpring({
        opacity: 1,
        right: 0,
        from: { opacity: 0, right: -150 },
        config: { duration: 300 },
    })
    return (
        <div className='fixed z-20 bg-black/80 w-full h-full left-0 top-0' onClick={() => props.setIsShow(false)}>
            <animated.div className='absolute right-0 bg-white h-full w-fit p-5' style={openAnimation}>
                <div className='text-right mb-10'>
                    <button className='group' onClick={() => props.setIsShow(false)}><FontAwesomeIcon className='text-2xl font-semibold group-hover:scale-105 duration-200' icon={faXmark} /></button>
                </div>
                <ul className='flex flex-col gap-5'>
                    <li className='group' onClick={() => props.setIsShow(false)}>
                        <a href="#" className='group-hover:text-yellow-800 duration-200'>
                            Đầu trang
                        </a>
                    </li>
                    <li className='group' onClick={() => props.setIsShow(false)}>
                        <a href="#infomation" className='group-hover:text-yellow-800 duration-200'>
                            Thông tin sản phẩm
                        </a>
                    </li>
                    <li className='group' onClick={() => props.setIsShow(false)}>
                        <a href="#contact" className='group-hover:text-yellow-800 duration-200'>
                            Liên hệ đặt trước
                        </a>
                    </li>
                </ul>
            </animated.div>
        </div>
    )
}
