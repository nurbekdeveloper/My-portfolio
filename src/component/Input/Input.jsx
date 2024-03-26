import React from 'react'
import Translate from '../../utils/Translate'
import Social from '../header/Social'

const Input = () => {
  return (
  <div>
     <form action="">
     <div className='my-20 flex flex-col  justify-center items-center p-5 gap-5'>
      <input type="text" className=' w-full max-w-[700px] border-none outline-none  bg-[#EDF2F8] px-[15px] py-[15px] rounded-[10px] ' placeholder='Your name ' />
      <input type="email" className=' w-full max-w-[700px] border-none outline-none  bg-[#EDF2F8] px-[15px] py-[15px] rounded-[10px] ' placeholder='Your email ' />
      <textarea type="" className=' w-full  max-w-[700px] h-[200px] border-none outline-none  bg-[#EDF2F8] px-[15px] py-[15px] rounded-[10px]  ' placeholder='Your Message  ' />
      <button target='blank'  className=' wi-full max-w-[350px]  bg-[#313bac] text-[white]   text-[18px] px-5 py-3 rounded-[10px]'><Translate dictionary={{ru:'Отправить',en:'Send Message'}}/> </button>
    </div>
   </form>
   <div className="relative mt-5 flex justify-between py-12 ">
      <div><Social/></div>
        <div className=" pt-[40px]  mt-[-40px] mr-[40px]">@2024 Nurbek Normatov </div>

      </div>
  </div>
  )
}

export default Input