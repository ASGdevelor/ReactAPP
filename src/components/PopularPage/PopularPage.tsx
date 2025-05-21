import AirlineImage from '../../../src/components/PopularPage/assets/image.png';
import React from "react";
import { useState } from 'react';
import Card from '../Catalog/Card';

import SlaidControl from '../PopularPage/SlaidControl'

import ParisImage from '../../../src/components/Catalog/assets/Paris.png';
import RomeImage from '../../../src/components/Catalog/assets/Rome.png';
import MoscovImage from '../../../src/components/Catalog/assets/moskov.png';
import londonImage from '../../../src/components/Catalog/assets/london.png';



const PopularPage: React.FC = () => {

        const [value,setValue]=useState(0);

    interface Card_T {
        title: string,
        price: number,
        srcImg: string
    }
    type MassiveCards = Card_T[];
    
    
        const [cards, SetCard] = useState<MassiveCards>([
            { title: 'Москва-Париж', price: 100, srcImg: ParisImage },
            { title: 'Париж-Москва', price: 100, srcImg: MoscovImage },
            { title: 'Москва-Рим', price: 250, srcImg: RomeImage },
            { title: 'Минск-Лондон', price: 310, srcImg: londonImage }
        ]);

        const visibleCards = cards.slice(value, value + 2);

        function decrement() {
            if(value=== 0) {
                setValue(cards.length-2);
            }
            else  {
                setValue(value-1);
            }     
        }

        function incrent() {
            if(value=== cards.length-2) {
                setValue(0);
            }
            else  {
                setValue(value+1);
            }
        }

    return (
        <section className='dark:text-white font-inter'>
            <h1 className='title  text-2xl md:text-4xl mb-6 font-semibold font-montserrat'>Популярные рейсы</h1>
            <div className='flex justify-center gap-x-5 items-center'>
                <SlaidControl title='←' callback={()=>incrent()} cls='bg-substrateWhite px-4 py-3  text-center rounded-50px dark:bg-darkSubstrate'/>
                <div className='slaider flex flex-col justify-center gap-x-8 overflow-x-auto и whitespace-nowrap gap-y-4 lg:flex-row'>
                    {
                        visibleCards.map((card,index)=> {
                            
                                return (
                                    <Card title={card.title} key={index+value} srcImg={card.srcImg} price={card.price}/>
                                );
                        })
                    }
                </div>
                <SlaidControl title='→' callback={()=>decrement()} cls='bg-substrateWhite px-4 py-3 text-center rounded-50px dark:bg-darkSubstrate'/>
                
            </div>
        </section>
    )
}

export default PopularPage;