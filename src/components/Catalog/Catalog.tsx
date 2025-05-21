import React, { useState,useMemo } from "react";
import Input from './Input';

import Card from "./Card";
import { Type } from "typescript";

import ParisImage from '../../../src/components/Catalog/assets/Paris.png';
import RomeImage from '../../../src/components/Catalog/assets/Rome.png';
import MoscovImage from '../../../src/components/Catalog/assets/moskov.png';
import londonImage from '../../../src/components/Catalog/assets/london.png';
import Option from './Option';

interface Card_T {
    title: string,
    price: number,
    srcImg: string
}
type MassiveCards = Card_T[];

const Catalog: React.FC = () => {

    const [cards, SetCard] = useState<MassiveCards>([
        { title: 'Москва-Париж', price: 100, srcImg: ParisImage },
        { title: 'Париж-Москва', price: 100, srcImg: MoscovImage },
        { title: 'Москва-Рим', price: 250, srcImg: RomeImage },
        { title: 'Минск-Лондон', price: 310, srcImg: londonImage }
    ]);
    const [sortType, setSortType] = useState<string>("");
    const [valueCard, SetValue] = useState<string>("");

     const filterCard = useMemo(() => {
        return cards.filter(card =>
            card.title.toLowerCase().includes(valueCard.toLowerCase())
        );
    }, [valueCard, cards]);


   const sortedCards = useMemo(() => {
    let sortCards = [...filterCard];  

    if (sortType === 'priceAsc') {
        sortCards.sort((a, b) => a.price - b.price);
    } else if (sortType === 'priceDesc') {
        sortCards.sort((a, b) => b.price - a.price);
    }

    return sortCards;  
}, [sortType, filterCard]);

    return (
        <section className="dark:text-white font-inter">
            <div className='flex flex-col mb-7 justify-start lg:flex-row lg:justify-between'>
                <h1 className='title text-left  text-2xl md:text-4xl font-semibold font-montserrat'>Каталог билетов</h1>
                <div className="flex flex-col mt-4 gap-y-5 justify-start sm:flex-row  sm:gap-0">
                    <Input title={valueCard} callback={(event) => SetValue(event.target.value)} />
                    <select className="button px-5 py-4 bg-substrateWhite w-100 text-center rounded-[50px] dark:bg-darkSubstrate"
                    onChange={(e)=>setSortType(e.target.value)}>

                        <Option value="" title='Сортировка'/>
                        <Option value="priceAsc" title='Цена(По возрастанию)'/>
                        <Option value="priceDesc" title='Цена(По убыванию)'/>

                    </select>
                </div>
            </div>
            <div className='cards grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20'>
                {
                    sortedCards.map((card, index) => {
                        return (
                            <Card title={card.title}  price={card.price} key={index} srcImg={card.srcImg} />
                        );
                    })
                }
            </div>
        </section>
    );
}
export default Catalog;
