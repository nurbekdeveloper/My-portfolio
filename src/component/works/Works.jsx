import React from 'react'
import Social from '../header/Social'

import { worksDB } from './works.db'
import { worksDBRu } from './works.db'
import Translate from '../../utils/Translate'
const Works = () => {
  return (
    <div  id='Works'  className='bg-[#edf2f8] pt-8'>
      <div className='font-bold flex gap-3  py-5 text-[35px] md:text-50px  my-6 md:my-16 justify-center'>
          <span>My</span>
          <span className='text-[#313bac]'><Translate dictionary={{ru:'Мои Работы',en:'Works'}}/></span>
      </div>
      <div className='flex justify-center flex-col gap-3  items-center'>
        {worksDB.map((item)=>(
            <div key={item.id}  className=' max-w-[350px] sm:max-w-[640px] md:max-w-[767px] lg:max-w-[1000px]  p-3 md:p-12 bg-[white] rounded-[10px]'>
            <img src={item.img} alt="img" className='rounded-[10px] md:w-[1365px] md:h-[600px] border-[1px] border-solid mb-10 border-[#edf2f8] ' />
            <div className=' flex flex-col gap-3  md:gap-5'>
              <h1 className='font-bold text-[15px]'><Translate dictionary={{ru:item.titleRu,en:item.title}}/></h1>
              <p className='text-[#5e6064]'><Translate dictionary={{ru:item.dateRu,en:item.date}}/> </p>
              <p   className='text-[#5e6064]'><Translate dictionary={{ru:item.descriptionRu,en:item.description}}/></p>
              <b><Translate dictionary={{ru:'Стек:',en:'Stack:'}}/></b>
              <p>{item.stack}</p>
              <div className='flex flex-row gap-4 justify-center md:justify-start'>

                <a target='blank' href={item.link} className='bg-[#313bac] wi-full  text-[white]  font-bold text-[18px] px-12 py-3 max-w-[350px] rounded-[10px]'>Visit</a>
                  <a  target='blank' href={item.githubLink} className='bg-[#313bac] wi-full text-[white]  font-bold text-[18px] px-12 py-3 max-w-[350px] rounded-[10px]'> Code </a>

              </div>
            </div>
          </div>
        ))}


      </div>
      <div className="relative mt-5 flex justify-between py-12 ">
      <div><Social/></div>
        <div className=" pt-[40px]  mt-[-40px] mr-[40px]">@2024 Nurbek Normatov </div>

      </div>

    </div>
  )
}

export default Works