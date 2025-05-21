import AirlineImage from '../../../src/components/Catalog/assets/air.png';
import React from "react";
import { Link,useNavigate } from 'react-router-dom';
import Button from '../header/button';


interface I_card {
    title: string,
    price?:number,
    srcImg:string,
}
const Card: React.FC<I_card> = ({ title,price,srcImg}) => {

    const navigate = useNavigate();
        const handleNavigation = () => {
                 navigate("/brons",{state:{title,price,srcImg}});
        };
    
    return (
        <div className='flex flex-col'>
            <div className='Block-Image mb-7'>
                <img src={srcImg} alt="CardAir" className='rounded-primary object-cover w-full h-full' />
            </div>
            <div className='Card-footer text-left flex justify-between items-center'>
                <div>
                    <p className='font-semibold text-2xl'>{title}</p>
                    <p className='font-medium text-x'>от {price} руб</p>
                </div>
                <Button callback={handleNavigation} title='Бронировать' cls="w-auto py-2 px-4 text-white button  bg-Action_W text-center rounded-[30px] sm:w-40 sm:py-4 sm:px-7 dark:bg-darkAction"/>
            </div>
        </div>
    );
};

export default Card;