import React from 'react';
import image from './assets/heroimg.png'
// import styles from './style';

function Hero() {
    return (
        <section name="hero" className="flex xl:h-[100vh] px-[10px] lg:px-10 2xl:px-20 mt-[50px] lg:mt-[100px] xl:mt-0">
            <div className='flex items-center justify-center flex-col lg:flex-row'>
                <div className="flex flex-col max-w-[90%] lg:max-w-[55%] justify-center">
                    <h1 className="text-headerHero font-bold leading-[110%] text-secondary text-center lg:text-left"><span className='text-primary'>Най-бързото</span> и <br /><span className='text-primary'>удобно</span> решение за Вашето заведение</h1>
                    <p className="text-paragraphHero text-secondary font-thin leading-[100%] xl:w-full mt-5 text-center lg:text-left">TabL е иновативна уеб платформа, предоставяща по-лесна възможност за разглеждане на менюто и поръчка във Вашия ресторант, бар или хотел.</p>
                    <button className="mt-[40px] lg:mt-[80px] h-buttonHero w-buttonHero bg-primary rounded-xl text-[34px] text-white hover:bg-secondary transition-all self-center lg:self-start">
                        Избери ресторант
                    </button>
                </div>
                <div className="max-w-[90%] sm:max-w-[70%] mt-10 lg:max-w-[47%] scale-60">
                    <img src={image} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero