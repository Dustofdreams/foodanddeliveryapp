import React from 'react';
import MenuComponent from './components/MenuComponent';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';

function DigitalMenu() {
    return (
        <section name="digitalmenu" className="mt-[166px] px-[10px] lg:px-10 2xl:px-20 w-[100%]">
            <div className="flex flex-col items-center">
                <h2 className="text-secondary mb-[40px] font-bold text-sectionHeading text-center" >TabL дигитално меню</h2>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 justify-center'>
                    <MenuComponent src={icon1} title="Намалете грешките" content="TabL е иновативна уеб платформа, предоставяща по-лесна възможност за разглеждане на менюто и поръчка във Вашия ресторант, бар или хотел."/>
                    <MenuComponent src={icon2} title="С опция за резервации и онлайн поръчки" content="TabL е иновативна уеб платформа, предоставяща по-лесна възможност за разглеждане на менюто и поръчка във Вашия ресторант, бар или хотел."/>
                    <MenuComponent src={icon3} title="Бъдете ЕКО с нас" content="TabL е иновативна уеб платформа, предоставяща по-лесна възможност за разглеждане на менюто и поръчка във Вашия ресторант, бар или хотел."/>

                </div>
            </div>
        </section>
    )
}

export default DigitalMenu