import React from 'react';
import {Libre_Bodoni} from 'next/font/google';
import Image from 'next/image';

const LibreBodoni = Libre_Bodoni ({weight: '700'})


const Hero = () => {
  return (
    <div className=' w-[90%] m-auto flex gap-44'>
        <div className='flex flex-col  justify-center w-1/2 h-full gap-10 pl-8 mt-36'>
            <div className={`${LibreBodoni.className} text-5xl`}>
                <h1>IMPECABBLE</h1>
                <h1>CRAFTSMANSHIP AND</h1>
                <h1>FINESSE</h1>
            </div>
            <p className={`${LibreBodoni.className} text-2xl text-[#787054]`}> An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
            <button className= {`${LibreBodoni.className} text-[#FFFFFF] bg-[#A29875]  w-40 border border-[#A29875] px-6 py-3 rounded-lg transition duration-500 `}>Explore Now</button>
        </div>
        <div className='mt-10'>
            <Image src="/image.jpeg" alt='' width={450} height={650} className='rounded-tl-[25%] rounded-br-[25%]'></Image>
        </div>
    </div>
  )
}

export default Hero

