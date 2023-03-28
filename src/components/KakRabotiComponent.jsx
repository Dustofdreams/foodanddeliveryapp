import React from 'react'

function KakRabotiComponent({ id, content, subcontent }) {
    return (
        <div className="flex flex-col items-center mb-[20px]">
            <h1 className="text-serciceHeadingXl font-bold text-primary text-center mb-[10px]">{id}</h1>
            <h2 className="text-servicesHeading font-medium leading-[110%] text-secondary text-center mb-[10px] md:mb-[30px]">
                {content}
            </h2>
            <p className='text-center text-holderParagraph font-light w-[90%]'>{subcontent}</p>
        </div>
    )
}

export default KakRabotiComponent