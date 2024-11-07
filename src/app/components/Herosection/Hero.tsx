import React from 'react';
import {Libre_Bodoni} from "next/font/google";
import Image from 'next/image';
// import img from './assets/image.jpeg';


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

//   <div className="min-h-screen w-full flex flex-col">
      
//   {/* Main Content */}
//   <div className="flex-grow flex  bg-white">
//     {/* Left Container */}
//     <div className="left-container h-screen flex items-center w-1/2 pl-12 justify-center">
//       <div className="ml-8">
//         <h1 className={`${LibreBodoni.className} "intro text-5xl text-[#000000] leading-4"`}>
//          IMPECCABLE CRAFTSMANSHIP AND FINESSE
//         </h1>

//         <p className={`${LibreBodoni.className}"detail text-[1.1rem] text-[#787054] max-w-[38rem] my-[1.1rem] mb-12 leading-[1.8rem]"`}>
//         An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
//         </p>
//         <div className="btn-container flex space-x-20 justify-center">
//           <button className="border border-[#A29875] text-white bg-[#A29875] px-6 py-3 rounded-lg transition duration-500 ">
//           ExploreNow
//           </button>
       
//         </div>ye code comment krun khud se krun sara
//       </div>
//     </div>
//     {/* Right Container */}
//     <div className="right-container h-screen flex items-center justify-center w-[50%] " >
//       <div className="shadow-box flex justify-center items-center w-[60%]" >
//         {/* <Image src={img} alt='' className='w-[370px] h-[370px] '></Image> */}
//       </div>
//     </div>
//   </div>
//   </div>

