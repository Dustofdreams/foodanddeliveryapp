import React from 'react'

function MenuComponent({src, title, content}) {
  return (
    <div className="bg-white w-[100%] 2xl:w-[100%] rounded-xl flex flex-col items-center justify-top">
        <div className='mt-[100px] mb-[40px]'>
            <img src={src} alt="" />
        </div>
        <div className='w-[90%] text-center mb-[100px]'>
            <h4 className="text-paragraphHero font-bold leading-[100%]">{title}</h4>
            <p className="text-holderParagraph mt-[30px]">{content}</p>
        </div>
    </div>
  )
}

export default MenuComponent