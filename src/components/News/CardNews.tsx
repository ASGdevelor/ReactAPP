
import React from "react";
import { Link,useNavigate } from 'react-router-dom';
import Button from '../header/button';

interface I_card {
    title: string,
    date: string,
    srcImg:string,
    description?:string
}

const CardNews: React.FC<I_card> = ({ title,date,srcImg,description}) => {

    
    const navigate = useNavigate();
        const handleNavigation = () => {
                 navigate("/news/newsPage",{state:{title,date,srcImg,description}});
        };
    
    return (
        <div className='flex flex-col font-inter'>
            <div className='Block-Image mb-7'>
                <img src={srcImg} alt="CardAir" className='rounded-primary object-cover w-full h-full' />
            </div>
            <div className='Card-footer text-left flex justify-between items-center'>
                <div>
                    <span className='font-light text-4'>{date}</span>
                    <p className='font-semibold text-xl mr-2'>{title}</p>
                </div>
                
            </div>
            <Button callback={handleNavigation} title='подробнее →' cls="text-black button py-4 bg-White w-40 text-start rounded-[30px] dark:text-white"/>
        </div>
    );
};

export default CardNews;