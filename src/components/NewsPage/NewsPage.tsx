import React from "react";
import { useLocation } from "react-router-dom";


const NewsPage: React.FC = () => {
    const location = useLocation();
    const { title,date,srcImg,description} = location.state || {};
    return (
        <section className="dark:text-white font-inter">
            <div className="flex flex-col justify-between items-center gap-10 md:flex-row">
                <div className="text-start md:w-1/2">
                    <p className='mb-4 dark:text-white'>{date}</p>
                    <h1 className="title  text-2xl md:text-4xl mb-6 font-semibold font-montserrat">{title || "Новость не найдена"}</h1>
                    <p className="mr-2">{description || "пусто"}</p>
                </div>
                <div className="rounded-primary overflow-hidden h-100 w-100 md:w-1/2 md:h-full">
                    {srcImg && <img src={srcImg} alt={title} className="object-fill w-full h-full" />}
                </div>
            </div>
        </section>
    );
}

export default NewsPage;