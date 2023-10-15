import React, { useState } from 'react'
import Payment from '../Payment'

export default function Product() {
    const [showPayment, setShowPayment] = useState(false);
    return (
        <>
            <section id='infomation' className='py-10'>
                <div className='w-4/5 mx-auto'>
                    <div className='grid md:grid-cols-3 gap-5 md:gap-10 py-5 md:py-10'>
                        <div className='md:col-span-1'>
                            <img className='object-cover rounded-md shadow-lg shadow-zinc-400 hover:scale-105 duration-200' src="../img/img3.jpg" alt="product" />
                        </div>
                        <div className='md:w-2/3 mx-auto md:col-span-2 pt-5'>
                            <h1 className='font-medium text-2xl text-center mb-5' style={{ color: '#7f6c55' }}>Tẩy tế bào chết cà phê Glamour</h1>
                            <p className='mb-3'>Giá: 120.000 VNĐ</p>
                            <p className='leading-8'>Hạt cà phê nguyên chất giúp làm sạch da chết cơ thể, làm đều màu da, giúp da trở nên mềm mịn, sáng màu.</p>
                            <button onClick={() => setShowPayment(true)} className='mt-5 text-white p-2 rounded-md hover:scale-105 duration-200' style={{ background: '#7f6c55' }}>Đặt hàng ngay</button>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 items-center gap-5 md:gap-10 py-5 md:py-10'>
                        <div className='md:col-span-2'>
                            <h1 className='font-medium text-2xl text-center mb-5' style={{ color: '#7f6c55' }}>Thông tin sản phẩm</h1>
                            <ol className='leading-8 text-sm flex flex-col gap-5' style={{ listStyle: 'decimal inside' }}>
                                <li>
                                    Xuất xứ: Việt Nam
                                </li>
                                <li>
                                    Dung tích: 200ml
                                </li>
                                <li>
                                    Hạn sử dụng: 1 năm kể từ NSX hoặc 6 tháng sau khi mở nắp
                                </li>
                                <li>
                                    Kết cấu: Dạng kem đặc màu nâu đen có hạt cà phê xay nhuyễn
                                </li>
                                <li>
                                    Thành phần chính: Cà phê, dầu dừa, dầu ô liu, bơ ca cao, vitamin E
                                </li>
                            </ol>
                        </div>
                        <div className='md:col-span-1'>
                            <img className='object-cover rounded-md shadow-lg shadow-zinc-400 hover:scale-105 duration-200' src="../img/img3.jpg" alt="product" />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 items-center gap-5 md:gap-10 py-5 md:py-10'>
                        <div className='md:col-span-1 mt-10'>
                            <img className='object-cover rounded-md shadow-lg hover:scale-105 duration-200' src="../img/img5.jpg" alt="product" />
                        </div>
                        <div className='md:col-span-2 mt-10'>
                            <h1 className='font-medium text-2xl text-center mb-5' style={{ color: '#7f6c55' }}>Công dụng sản phẩm</h1>
                            <ol className='leading-8 text-sm flex flex-col gap-5' style={{ listStyle: 'decimal inside' }}>
                                <li>
                                    Loại bỏ da chết toàn thân
                                </li>
                                <li>
                                    Mang lại làn da mịn màng ngay sau khi sử dụng
                                </li>
                                <li>
                                    Giúp da sáng mịn, đều màu
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            {showPayment ? <Payment setShowPayment={setShowPayment} /> : ''}
        </>
    )
}
