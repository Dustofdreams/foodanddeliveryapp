import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";


function Footer() {
    return (
        <footer className='flex flex-col lg:flex-row justify-center items-center lg:justify-between mt-[50px] lg:mt-[150px] mb-[30px] px-[10px] lg:px-10 2xl:px-20 w-full'>
            <div className='flex order-3 lg:order-1 text-smallLegal justify-center items-center lg:gap-3'>
                <p className='underline mr-[10px] lg:mr-0'>Общи условия</p>
                <p className='text-[60px] mr-[10px] lg:mr-0'>&sdot;</p>
                <p className='underline hidden lg:flex'>Политика за <br/> поверителност</p>
                <p className='underline flex lg:hidden'>Политика за поверителност</p>
            </div>
            <div className='flex items-center order-2 gap-[26px] transition-all'>
                <div>
                    <FaFacebookSquare size={50} className="hover:text-primary text-secondary" />
                </div>
                <div>
                    <FaInstagramSquare size={50} className="text-secondary hover:text-primary" />
                </div>
                <div>
                    <FaLinkedin size={50} className="text-secondary hover:text-primary" />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center w-[100%] lg:max-w-[40%]'>
                <div className='mb-[60px] lg:mb-0'>
                    <p className="text-holderParagraph font-bold text-center mb-[10px] xl:mb-0">Научете първи за нашите промоции</p>
                    <div className="w-full flex flex-col order-1 lg:order-3 items-center lg:items-start">
                        <form action="" className='flex flex-col md:flex-row transition-all w-full items-center'>
                            <input type="email" name="" id="" className='h-[75px] min-w-[80%] lg:min-w-[70%] rounded-xl mb-5 md:mb-0 mr-[10px] indent-10 border-[2px] border-gray-300' placeholder='Имейл' />
                            <input type="submit" value="Абонирай се" className="bg-primary hover:bg-secondary text-white h-[75px] max-w-[238px] rounded-xl min-w-[40%] lg:min-w-[30%] text-center text-[20px]" />
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    ) 
}

export default Footer