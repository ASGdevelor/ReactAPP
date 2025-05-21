import AirlineImage from '../../../src/components/MainPage/assets/image.png';
import React from "react";
import { Link,useNavigate } from 'react-router-dom';
import Button from '../header/button';
const ErrorPage: React.FC = () => {

    const navigate = useNavigate();
        const handleNavigation = () => {
                 navigate("/");
        };
    
    return (
        <section>
            <div className="w-full flex flex-col gap-10  items-center justify-center  md:flex-row xl:gap-25 xl:h-full font-inter">
                <div className="block-1 text-start">
                    <h1 className="title text=center text-2xl md:text-4xl mb-6 font-semibold dark:text-white font-montserrat">Ошибка 404</h1>      
                    <Button title='Вернуться на главную' callback={handleNavigation} cls='text=center bg-actionWhite dark:bg-darkAction py-4 px-6 text-white rounded-3xl'/>
                </div>
                <div className="block-Image rounded-primary overflow-hidden w-1/2 h-full 2xl:w-1/(1/2)">
                    <img src={AirlineImage} alt="airlineImage" className="block-Image__image object-cover w-full h-full" />
                </div>
            </div>
        </section>
    );
}
export default ErrorPage;