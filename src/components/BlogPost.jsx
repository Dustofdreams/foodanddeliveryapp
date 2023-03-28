import React from 'react';


function BlogPost({ image, text, date }) {
    return (
        <div className="card max-w-[540px] bg-white rounded-lg gap-10">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body relative mt-5 lg:mt-0">
                <div className='ml-[20px] mb-[40px] h-[50px] lg:h-[100px]'>
                    <h2 className=" text-holderParagraph ">{text}</h2>
                </div>
                <div className="card-actions flex justify-between items-end mb-[20px] mx-[20px]">
                    <p className="text-smallLegal font-light">{date}</p>
                    <p className='text-smallLegal font-light'>tabl.bg</p>
                </div>
            </div>
        </div>
    )
}

export default BlogPost