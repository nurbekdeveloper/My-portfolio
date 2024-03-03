import React, { useState } from "react";
import { HiMiniBars2 } from "react-icons/hi2";
function Navbar() {
  const [toggle, setToggle]= useState(true);
  console.log(toggle);
  return (

    <div className=" fixed backdrop-blur     navbar  w-full  bg-[#F2F5FA] p-5">
      <div className="  container  mx-auto   w-full flex justify-between item-center ">
        <div className="text-[25px] ">Nurbek</div>
        <ul className= { ` flex  md:flex-row md:static   md:w-auto md:bg-[transparent] flex-col  gap-6 text-[#6b7688]  md:h-auto font-[600] uppercase absolute w-[50%] ${toggle ? 'right-[-100%]' : 'right-0'} h-[100vh] right-0 top-[80px] transition-[0.5s]`}>
          <li className="links">Home </li>
          <li className="links">Skills </li>
          <li className="links">My works </li>
          <li className="links">Contact </li>
        </ul>
        <div className="flex  gap-2 min-[900px]:text-center">
          <div className="text-[#6b7688]">Ru</div>
          <div className="text-[#313bac]">EN</div>
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
