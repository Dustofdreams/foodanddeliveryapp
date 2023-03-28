import React from 'react';
import logo1 from "../src/assets/logoklienti1.png";
import logo2 from "../src/assets/logoklienti2.png";
import logo3 from "../src/assets/logoklienti3.png";
import logo4 from "../src/assets/logoklienti4.png";
import logo5 from "../src/assets/logoklienti5.png";
import logo6 from "../src/assets/logoklienti6.png";

function Klienti() {
  return (
    <section name="klienti" className='mt-[150px] flex flex-col px-[10px] lg:px-10 2xl:px-20 lg:h-[100vh]'>
      <div className='flex flex-col items-center'>
        <h2 className='text-sectionHeading font-bold text-secondary pb-[40px]'>Нашите партньори</h2>
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-10 items-center justify-items-center'>
          <div>
            <img src={logo1} alt="" className="max-h-[100px]" />
          </div>
          <div>
            <img src={logo2} alt="" className=" max-h-[60px]" />
          </div>
          <div>
            <img src={logo3} alt="" className=" max-h-[80px]" />
          </div>
          <div>
            <img src={logo4} alt="" className=" max-h-[60px]" />
          </div>
          <div>
            <img src={logo6} alt="" className=" max-h-[60px]" />
          </div>
          <div>
            <img src={logo5} alt="" className=" max-h-[80px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-[100px] lg:mt-[200px] 3xl:mt-[20vh] text-headerHero font-bold text-center leading-[100%] text-secondary">Подайте ръка на иновациите.<br /><span className='text-primary'>Лесно е.</span></h1>
        <button className="mt-[40px] lg:mt-[80px] h-buttonHero w-buttonHero bg-primary rounded-xl text-[34px] text-white hover:bg-secondary transition-all self-center">
          Присъедини се 
        </button>
      </div>
    </section>
  )
}

export default Klienti