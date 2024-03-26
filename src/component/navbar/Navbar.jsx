import React, { useState } from "react";
import { HiMiniBars2 } from "react-icons/hi2";
import Translate from "../../utils/Translate";
import { setLanguage } from "../../Redux/NavbarSlice";
import { useDispatch, useSelector } from 'react-redux';
function Navbar() {

  const {language} = useSelector(state=>state.navbar)
    console.log(language);
    const dispatch = useDispatch()
    const [toggle,setToggle] = useState(false)

  return (

    <div id="Navbar" className=" fixed backdrop-blur  z-[20]    navbar  w-full  bg-[#F2F5FA] p-5">
      <div className="  container  mx-auto    w-full flex justify-between item-center ">
      <div className='text-[20px] font-bold'>
      Nurbek
        </div>

            <ul className={`flex md:flex-row flex-col gap-6 text-[#6b7688] font-[600] uppercase md:bg-[transparent] md:w-auto md:static bg-[white]  w-[80%] ${toggle ? 'right-0' : 'right-[-100%]'} top-[80px] md:h-auto h-[100vh] absolute transition-[1s] md:p-0 p-10 text-[14px]`}>
                <li><a href="#home" className='links' onClick={()=>setToggle(false)}><Translate dictionary={{ru:'ГЛАВНАЯ',en:'Home'}}/></a></li>
                <li><a href="#skills" className='links' onClick={()=>setToggle(false)}><Translate dictionary={{ru:'НАВЫКИ',en:'Skills'}}/></a></li>
                <li><a href="#works" className='links' onClick={()=>setToggle(false)}><Translate dictionary={{ru:'МОИ РАБОТЫ',en:'My Works'}}/></a></li>
                <li><a href="#contact" className='links' onClick={()=>setToggle(false)}><Translate dictionary={{ru:'КОНТАКТЫ',en:'Contact'}}/></a></li>
            </ul>

        <div className='flex md:gap-5 gap-1  text-[12px]'>
            <div onClick={()=>dispatch(setLanguage('ru'))} className={`cursor-pointer ${language === 'ru' ? 'text-[blue]' : 'text-[#6b7688]'}`}>RU</div>
            <div onClick={()=>dispatch(setLanguage('en'))} className={`cursor-pointer ${language === 'en' ? 'text-[blue]' : 'text-[#6b7688]'}`}>ENG</div>

        </div>



        {/* bars  */}
        <div onClick={()=>setToggle(!toggle)} className=" p-[7px] rounded-full md:hidden text-[white] h-[40px]  bg-[#313bac] text-[25px]" >
          <HiMiniBars2 />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
