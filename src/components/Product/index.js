import React from 'react'

export default function Product() {
    return (
        <section id='infomation' className='py-10'>
            <div className='w-4/5 grid md:grid-cols-3 mx-auto gap-5 md:gap-10'>
                <div className='col-span-1'>
                    <img className='object-cover rounded-md shadow-lg shadow-zinc-400 hover:scale-105 duration-200' src="https://lelabo.com.vn/upload/images/product/2022_03_12_15_44_33-50.1.jpg" alt="product" />
                </div>
                <div className='col-span-2'>
                    <h1 className='font-medium text-2xl text-center mb-5' style={{ color: '#7f6c55' }}>Thông tin sản phẩm</h1>
                    <ol className='leading-8 text-sm flex flex-col gap-5' style={{ listStyle: 'decimal inside' }}>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde nemo autem quibusdam eos voluptatibus tempora deleniti totam laboriosam voluptate.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde nemo autem quibusdam eos voluptatibus tempora deleniti totam laboriosam voluptate.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde nemo autem quibusdam eos voluptatibus tempora deleniti totam laboriosam voluptate.
                        </li>
                    </ol>
                </div>
                <div className='col-span-2 mt-10'>
                    <h1 className='font-medium text-2xl text-center mb-5' style={{ color: '#7f6c55' }}>Thông tin sản phẩm</h1>
                    <ol className='leading-8 text-sm flex flex-col gap-5' style={{ listStyle: 'decimal inside' }}>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde nemo autem quibusdam eos voluptatibus tempora deleniti totam laboriosam voluptate.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde nemo autem quibusdam eos voluptatibus tempora deleniti totam laboriosam voluptate.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde nemo autem quibusdam eos voluptatibus tempora deleniti totam laboriosam voluptate.
                        </li>
                    </ol>
                </div>
                <div className='col-span-1 mt-10'>
                    <img className='object-cover rounded-md shadow-lg shadow-zinc-400 hover:scale-105 duration-200' src="https://lelabo.com.vn/upload/images/product/2022_03_12_15_44_33-50.1.jpg" alt="product" />
                </div>
            </div>
        </section>

    )
}
