import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { paymentSchema } from '../../schema';
import Swal from 'sweetalert2';
import { useSpring, animated } from '@react-spring/web';

export default function Payment(props) {
    const [quantity, setQuantity] = useState(1);
    const { setShowPayment } = props;
    const openAnimation = useSpring({
        opacity: 1,
        top: 0,
        from: { opacity: 0, top: -1000 },
        config: { duration: 500 },
    })
    const formik = useFormik({
        initialValues: {
            userName: '',
            address: '',
            email: '',
            phone: ''
        },
        validationSchema: paymentSchema,
        onSubmit: (value) => {
            setShowPayment(false);
            Swal.fire({
                icon: 'success',
                title: '<h6 className="font-light" style={{fontSize:20}}>Đặt hàng thành công</h6>',
            })
        }
    });

    const handleChangeQuantity = (e) => {
        const value = e.target.value;
        setQuantity(value)
    }

    return (
        <div className='bg-black/80 fixed z-20 w-full h-full left-0 top-0 flex justify-center items-center'>
            <animated.div className='bg-white p-5 rounded-md mx-5 relative' style={openAnimation}>
                <button onClick={() => setShowPayment(false)} className='absolute top-2 right-3'><FontAwesomeIcon className='text-2xl' icon={faXmark} /></button>
                <h1 className='my-5 text-center font-semibold text-lg' style={{ color: '#7f6c55' }}>Thông tin đặt hàng</h1>
                <div className='flex gap-5 items-center mb-5 text-sm'>
                    <img src="../img/img6.jpg" alt="anh" width={80} height={80} />
                    <div className='flex flex-col gap-3'>
                        <h6>Tẩy tế bào chết cà phê Glamour</h6>
                        <input value={quantity} min={1} onChange={handleChangeQuantity} className='border rounded-md text-sm p-1.5' type="number" style={{ width: 55 }} />
                        <p>Tổng tiền: {(quantity * 120000).toLocaleString()} VNĐ</p>
                    </div>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className='mb-3'>
                        <h6 className='mb-2'>Tên người đặt</h6>
                        <input name='userName' onChange={formik.handleChange} onBlur={formik.handleBlur} className='border rounded-md w-full p-2' type="text" />
                        {formik.touched.userName && formik.errors.userName ? <p className='text-red-500 text-sm'>{formik.errors.userName}</p> : ''}
                    </div>
                    <div className='mb-3'>
                        <h6 className='mb-2'>Địa chỉ</h6>
                        <input name='address' onChange={formik.handleChange} onBlur={formik.handleBlur} className='border rounded-md w-full p-2' type="text" />
                        {formik.touched.address && formik.errors.address ? <p className='text-red-500 text-sm'>{formik.errors.address}</p> : ''}
                    </div>
                    <div className='mb-5'>
                        <h6 className='mb-2'>Số điện thoại</h6>
                        <input name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} className='border rounded-md w-full p-2' type="text" />
                        {formik.touched.phone && formik.errors.phone ? <p className='text-red-500 text-sm'>{formik.errors.phone}</p> : ''}
                    </div>
                    <div className='mb-5'>
                        <h6 className='mb-2'>Email</h6>
                        <input name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} className='border rounded-md w-full p-2' type="text" />
                        {formik.touched.email && formik.errors.email ? <p className='text-red-500 text-sm'>{formik.errors.email}</p> : ''}
                    </div>
                    <div className='text-center'>
                        <button type='submit' className='w-full p-2 text-white rounded-md' style={{ background: '#7f6c55' }}>Đặt hàng</button>
                    </div>
                </form>
            </animated.div>
        </div>
    )
}
