import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Social = () => {
  return (
    <div  className='absolute left-[20px] gap-3  flex-col  bottom-[15px] md:flex hidden'>
      <a href='https://t.me/nurbeknormatov' target='blank' className='text-[#6b7688]   rounded-full border-[1px]  text-[20px] bg-[white] w-[50px] h-[50px] flex justify-center items-center hover:text-[white] hover:bg-[#313bac] '>
        <FaTelegram />
      </a>
      <a href='https://www.linkedin.com/in/nurbek-normatov-275b18284/'   target='blank'  className='text-[#6b7688] border-[1px]  rounded-full text-[20px] bg-[white] w-[50px] h-[50px] flex justify-center items-center hover:text-[white] hover:bg-[#313bac]'>
      <FaLinkedin />
      </a>



    </div>
  )
}

export default Social