import React from 'react'
import KakRabotiComponent from './components/KakRabotiComponent'
import Otzivi from './components/Otzivi'

function KakRaboti() {
    return (
        <section name="kakraboti" className="px-[10px] lg:px-10 2xl:px-20 flex flex-col mt-[200px]">
            <div className="flex flex-col items-center">
                <h2 className="text-secondary mb-[40px] text-sectionHeading font-bold" >Как работи TabL</h2>
                <div className='grid grid-cols-1 justify-center align-middle'>
                    <div className='flex flex-col gap-5 lg:flex-row'>
                        <KakRabotiComponent id="1" content="Заявете своя тестов период бързо и лесно" subcontent="на телефон, имейл или чат съобщение" />
                        <KakRabotiComponent id="2" content="Персонализирайте за Вашия бизнес" subcontent="за да отговаря на вашите нужди" />
                        <KakRabotiComponent id="3" content="Започнете да приемате онлайн поръчки" subcontent="чрез доставка, взимане от обект или на място, сканирайки QR код" />
                    </div>
                    <div className='flex justify-center'>
                        <button className="self-center col-start-2 mt-[20px] lg:mt-[40px] h-buttonHero w-buttonHero bg-primary rounded-xl text-holderHeading text-white hover:bg-secondary transition-all">
                            Демо меню
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-[90px]'>
                <div className="flex flex-col items-center">
                    <h2 className="text-secondary mb-[40px] text-sectionHeading font-bold" >Отзиви</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center align-middle'>
                        <div>
                            <Otzivi customer="Илия" place="Ресторант Българче, гр. Смолян" text="&#10077; Благодарим на невероятния екип на TabL.bg и в частност на Денис за перфектно свършената работа! Горещо препоръчваме на всички колеги! &#10078;" />
                        </div>
                        <div className='text-center'>
                            <Otzivi customer="Данилина" place="Магазин за месо BulNaMe, гр. Стара Загора" text='&#10077; Препоръчвам с две ръце. И за заведенията и производителите, и за клиентите! Платформата е лесна за използване, а екипът е чудесен! &#10078;' />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default KakRaboti