import AirlineImage from '../../../src/components/About/assets/air.png';
import React from "react";
import AirImage2 from './assets/polet-v-nebo-zakata.jpg'
import AirImage1 from './assets/terminal-aeroporta.jpg'

interface I_About {
title:string
}
const About: React.FC<I_About> = ({title}) => {
    return (
        <section>
            <div className='content container w-full grid grid-cols-1 grid-flow-row gap-x-40 gap-y-10 md:grid-cols-2 font-inter dark:text-white'>

                <div className='content__iten flex  flex-col content__iten items-start justify-center  text-left'>
                    <h1 className='title text-left  text-2xl md:text-4xl mb-6 font-semibold font-montserrat'>{title}</h1>
                    <p className="subtitle text-left text-base md:text-xl mb-7">
                        Планируйте путешествия, бронируйте рейсы и наслаждайтесь комфортом наших услуг – всё для вашего незабываемого полета.
                    </p>
                </div>
                <div className='content__iten'>
                    <img className='rounded-primary object-cover w-full h-full' src={AirImage1} alt="АвиаПерелёты" />
                </div>
                <div className='content__iten hidden md:block'>
                    <img className='rounded-primary object-cover w-full h-full' src={AirImage2} alt="АвиаПерелёты" />
                </div>
                <div className='content__iten flex  flex-col content__iten items-start justify-center  text-left'>
                    <p className="subtitle text-right md:text-xl mb-7 ">
                        Планируйте путешествия, бронируйте рейсы и наслаждайтесь комфортом наших услуг – всё для вашего незабываемого полета.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;