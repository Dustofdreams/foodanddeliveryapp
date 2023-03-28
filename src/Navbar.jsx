import React from 'react';
import NavItem from './components/NavItem';
import '../src/assets/logo.png'
import { TiThMenu, TiDelete } from "react-icons/ti";
import { useState } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';





function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuClicked = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }
  return (


    <nav className="overflow-y-hidden md:overflow-y-auto">
      <div className='flex justify-between h-[82px] text-[20px] items-center px-[10px] lg:px-10 2xl:px-20'>

        <div>
          <img src='../src/assets/logo.png' alt="" />
        </div>
        <div className='items-center hidden xl:flex'>
          <div className='text-primary font-bold'><NavItem title="Начало" /></div>
          <Link activeClass="active" to="digitalmenu" smooth={true} offset={-50} duration={600}><NavItem title="Услуги" /></Link>
          <Link activeClass="active" to="kakraboti" smooth={true} offset={0} duration={600}><NavItem title="Заведения" /></Link>
          <Link activeClass="active" to="klienti" smooth={true} offset={-100} duration={1000}><NavItem title="Контакти" /></Link>
          <Link activeClass="active" to="blog" smooth={true} offset={-100} duration={1000}><NavItem title="Блог" /></Link>
          <button className="group relative mr-[48px] h-12 w-[192px] overflow-hidden rounded-lg text-lg border-2 border-primary hover:border-none hover:bg-secondary hover:text-white transition-all">Присъединете се</button>
          <button className="group relative h-12 w-[144px] overflow-hidden rounded-lg bg-primary text-lg shadow transition-all">
            <span className="relative text-black group-hover:text-white">Демо</span>
          </button>
        </div>

        <div className='flex flex-col xl:hidden w-full items-end transition-all duration-500'>
          {!mobileMenuOpen ? (
            <TiThMenu className='h-[25px] w-[29px]' onClick={menuClicked}/>
          ) : (
            <TiDelete className='h-[39px] w-[39px] z-20 top-5 right-5 relative' onClick={menuClicked}/>
          )}
          <ul className={!mobileMenuOpen ? "hidden" : "absolute h-[100vh] w-2/3 z-10 bg-primary gap-4 overflow-y-hidden"}>
            <li className='mt-[100px] ml-[30px] text-[24px] mb-[15px] font-bold text-white'>Начало</li>
            <li className='ml-[30px] text-[24px] mb-[15px]'>Заведения</li>
            <li className='ml-[30px] text-[24px] mb-[15px]'>Контакти</li>
            <li className='ml-[30px] text-[24px] mb-[15px]'>Блог</li>
            <li><button className='ml-[30px] text-[24px] mb-[15px]'>Присъединете се</button></li>
            <li><button className='ml-[30px] text-[24px]'>Демо</button></li>
          </ul>
        </div>




      </div>
    </nav>
  )
}

export default Navbar