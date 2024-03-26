import React from "react";

import { skillsData } from "./skills.db";
import Social from "../header/Social";
import Translate from "../../utils/Translate";



const Skills = () => {
  return (
    <div id="Skills" className="relative pt-8">
      <div className="flex  font-bold justify-center items-center  my-16 gap-1 text-[50px]">
        <span>My</span>
        <span className="text-[#313bac]"><Translate dictionary={{ru:'Навыки',en:'Skills'}}/></span>
      </div>

      <div className="flex flex-wrap gap-4 md:gap-10 justify-center items-center mt-4 w-[70%] m-auto  ">
        {skillsData.map((item)=>(
          <div key={item.id}>
          <div className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]  hover:shadow-lg  flex justify-center items-center bg-[#FEF4F5] rounded-full">
            <img src={item.href} alt="react" className="w-[50px] h-[50px]" />
          </div>
          <div className="text-center">{item.title}</div>
      </div>

        ))}

      </div>


      <div className="relative mt-5 flex justify-between py-8 ">
      <div><Social/></div>
        <div className=" pt-[40px]  mt-[-40px] mr-[40px]">@2024 Nurbek Normatov </div>

      </div>
    </div>
  );
};

export default Skills;
