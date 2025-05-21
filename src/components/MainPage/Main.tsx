import AirlineImage from '../../../src/components/MainPage/assets/image.png';
import React from "react";
import { Link,useNavigate } from 'react-router-dom';
import Button from '../header/button';
import AirImage from './assets/image2(1).png'
const Main: React.FC = () => {

    const navigate = useNavigate();
        const handleNavigation = () => {
                 navigate("/catalog");
        };
        
    return (
        <section>
            <div className="w-full flex flex-col gap-10  items-center justify-start  md:flex-row xl:gap-25 xl:h-full font-inter">
                <div className="block-1 text-start">
                    
                    <p className='mb-4 dark:text-white'>лучшие авиалинии</p>
                    <h1 className="title  text-2xl md:text-4xl mb-6 font-semibold dark:text-white font-montserrat">Откройте мир с нами: 
                    ваш путь начинается здесь</h1>
                    <p className="subtitle text-base md:text-xl mb-7 dark:text-white">
                        Планируйте путешествия, бронируйте рейсы и наслаждайтесь комфортом наших услуг – всё для вашего незабываемого полета.
                    </p>
                    <Button title='Забронировать рейс' callback={handleNavigation} cls=' bg-actionWhite dark:bg-darkAction py-4 px-8 text-white rounded-3xl'/>
                </div>
               
                <div className="block-Image rounded-primary overflow-hidden w-full h-full 2xl:w-1/(1/2)">
                    <img src={AirImage} alt="airlineImage" className="block-Image__image object-cover w-full h-full" />
                </div>
            </div>
        </section>
    );
}
export default Main;