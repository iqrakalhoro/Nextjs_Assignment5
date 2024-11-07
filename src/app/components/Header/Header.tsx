import React from 'react'
import { Rye } from "next/font/google";

const rye = Rye({ weight: '400', subsets: ['latin'] })
const Header = () => {
  return (

    <div className='bg-[#A29875] h-[134px] flex items-center'>
      <div className={`${rye.className} logoh-[94px] w-[439px]  ml-[36px] 
text-[75px] font-medium leading-[93px]  align-left  text-[#FFFFFF]`}> MANZZARI</div>

    </div>
  )
}

export default Header