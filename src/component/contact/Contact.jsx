import React from 'react'
import telegram from '../img/telegram.jpg'
import linkedin from '../img/linkedin.png'
import phone  from '../img/phone.png'
import Input from '../Input/Input'
import Translate from '../../utils/Translate'

const Contact = () => {
  return (
    <div id='Contact' className='pt-8'>
      <div className='text-[35px] md:text-[44px] my-10 text-center font-bold '> <Translate dictionary={{ru:'Контакты',en:'Contact'}}/></div>
      <div className='max-w-[700px] w-full m-auto '>
        <div className='flex flex-wrap justify-center items-center gap-10'>
        <a href="https://www.linkedin.com/in/nurbek-normatov/" target='blank' className='flex max-w-[300px] h-[70px] px-10 justify-start gap-2  items-center bg-[#FEF4F5] rounded-[10px] shadow-md hover:cursor-pointer  '>
          <img src={linkedin} alt="img" className='w-[50px] rounded-full' />
          <span>in/nurbek-normatov</span>
        </a>
        <a href="http://t.me/nurbeknormatov" target='blank' className='flex max-w-[300px] h-[70px] px-10 justify-start gap-2  items-center bg-[#FEF4F5] rounded-[10px] shadow-md hover:cursor-pointer  '>
          <img src={telegram} alt="img" className='w-[50px] rounded-full' />
          <span>t.me/nurbeknormatov</span>
        </a>

        <a href="+998880130027"  target='blank' className='flex min-w-[300px] h-[70px] px-10 justify-start gap-2  items-center bg-[#FEF4F5] rounded-[10px] shadow-md hover:cursor-pointer  '>
          <img src={phone} alt="img" className='w-[50px] rounded-full' />
          <span>+998880130027</span>
        </a>

        </div>
      </div>
      <Input/>
    </div>
  )
}

export default Contact