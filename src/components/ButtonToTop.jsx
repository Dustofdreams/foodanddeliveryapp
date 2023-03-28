import React from 'react';
import { useState, useEffect } from 'react';
import { TiArrowSortedUp } from 'react-icons/ti';


    function ButtonToTop() {
        const [backToTop, setBackToTop] = useState(false);

        const scrollTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        };

        useEffect(() => {
            window.addEventListener("scroll", () => {
                window.scrollY > 300 ? setBackToTop(true) : setBackToTop(false)
            })
        }
            , []);

        return (
            <>
                {backToTop && (
                    <button onClick={scrollTop} className="fixed bottom-5 right-5 rounded-full p-5 bg-secondary hover:bg-primary text-white shadow-md transition-all">
                        <TiArrowSortedUp size={30}/>
                    </button>
                )}
            </>

        )
    }

export default ButtonToTop