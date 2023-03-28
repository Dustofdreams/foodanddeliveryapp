import React from 'react'
import BlogPost from './components/BlogPost'
import image1 from './assets/Mask Group 3.jpg';
import image2 from './assets/Mask Group 4.jpg';
import image3 from './assets/Mask Group 5.jpg';


function Blog() {
    return (
        <section name="blog" className='mt-[240px] px-[10px] lg:px-10 2xl:px-20 flex flex-col items-center'>
        <h2 className="text-sectionHeading font-bold">TabL Блог</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-[20px]'>
                <BlogPost image={image3} text="Как да обзаведем ресторант" date="22.03.2023"/>
                <BlogPost image={image1} text="Как един ХоРеКа бизнес може да спести от ненужни разходи?" date="22.03.2023"/>
                <BlogPost image={image2} text="3+1 начина как да развиете успешно ресторанта си" date="22.03.2023"/>
            </div>
        </section>
    )
}

export default Blog