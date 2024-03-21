import React from 'react';
import img from '../img/gif for developers.gif';
import react from '../img/react.png';
import redux from '../img/redux.png';
import sass from '../img/sass.png';
import Social from './Social';
import { Fade  } from 'react-reveal';
import { Zoom } from "react-reveal";

const Header = () => {
  return (
    <div className=' lg:pt-0 pt-[200px]  bg-[#edf2f8] w-full  flex  md:h-[100vh] h-auto   lg:flex-row flex-col items-center justify-center gap-10 '>
  <Fade left>
    <div className='flex  md:h-[100vh] h-auto  flex-col  gap-5 items-center justify-center md:items-end max-w-[350px]'>
        {/* cv */}

      <div className='flex justify-center p-1   w-[300px]  gap-6 shadow-lg  bg-white rounded-[15px]'>
        <p className='text-[35px]'>👋</p>
        <p className='flex flex-col  bg-white'>
          <span className='text-slate-400 text-[20px]'>Hello I am </span>
          <span className='font-bold text-[30px]'>Nurbek </span>
        </p>
      </div>


      <div className='w-full text-slate-400 text-[20px] bg-white max-w-[250px] p-2 rounded-[10px] shadow-lg' >Fronted / React developer </div>


      <a href='developer.pdf' className='bg-[#313bac] wi-full text-[white]  font-bold text-[18px] px-5 py-3 max-w-[350px] rounded-[15px]'> Download  CV </a>
    </div>
  </Fade>
    <Zoom top  duration={1000} delay={200}>
    <div>
    <img src={img} alt="img" />
    </div>
    </Zoom>
    <Fade right>
    <div className='flex  lg:flex-col gap-[40px]  '>
      <div className='w-[60px] h-[60px]  lg:w-[100px] lg:h-[100px] text-center rounded-full  bg-[white]  shadow-2xl flex justify-center items-center'>
        <img src={redux} className='w-[80%]' alt="redux img " />
      </div>
      <div className=' w-[85px] h-[85px] lg:w-[150px] lg:h-[150px] rounded-full text-center  bg-[white] shadow-2xl flex justify-center items-center'>
        <img src={react} className='w-[100%]' alt="react img " />
      </div>
      <div className=' w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] rounded-full  text-center  bg-[white] shadow-2xl flex justify-center items-center'>
        <img src={sass} className='w-[60%]' alt="" />
      </div>
    </div>
    </Fade>
    <Social/>
    </div>
  )
}

export default Header