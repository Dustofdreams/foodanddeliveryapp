import React from 'react'

function Otzivi({place, text, customer}) {
  return (
    <>
      <div className="text-holderParagraph bg-white leading-[110%] rounded-lg p-[28px] text-center">
        <p>{text}</p>
      </div>
      <div className='flex flex-col items-center'>
        <p className="text-primary font-bold text-[25px] mt-[-20px]">{customer}</p>
        <p className="text-[20px] text-[#ACACAC]">{place}</p>
      </div>
    </>
  )
}

export default Otzivi