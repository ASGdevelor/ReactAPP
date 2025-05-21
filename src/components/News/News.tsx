import React, { useMemo, useState } from "react";
import Input from "../Catalog/Input";

import londonImage  from './assets/london.png'
import mosckovImage  from './assets/mosckovAir.png'
import ParisPhoto  from './assets/Paris.png'
import RomePhoto  from './assets/Rome.png'
import BerlinPhoto from './assets/berlinPhoto.png'
import tokyoImage from './assets/Tokye.png'

import CardNews from "./CardNews";

const News: React.FC = () => {

    interface Card_T {
        title: string,
        date: string,
        description:string,
        srcImg: string
    }
    type MassiveCards = Card_T[];
    
        const [cards, SetCard] = useState<MassiveCards>([
            { title: 'Московский аэропорт расширяет горизонты: открытие нового терминала', date: '16-06-2024',
              description:'В крупнейшем авиационном узле России открылся новый терминал, оснащённый передовыми технологиями.Улучшенная логистика, инновационные сервисы и повышенный уровень комфорта для пассажиров делают его ключевой точкой на карте международных перелётов.',
            srcImg: mosckovImage},
            { title: 'Париж прокладывает путь к экологичным авиаперелётам', date: '21-02-2024',
             description:'Франция запускает программу перехода на экологически чистые авиаперелёты. Новые технологии, биотопливо и снижение выбросов углекислого газа помогут сделать полёты более безопасными для планеты. Париж задаёт тренд для будущего авиации.',  
            srcImg: ParisPhoto},
            { title: 'Ежедневные рейсы Москва-Рим: комфорт по доступной цене', date: '21-01-2024',
             description:'Авиакомпания объявила о запуске ежедневных рейсов между Москвой и Римом. Теперь путешественники смогут насладиться итальянским гостеприимством, а стоимость билетов останется привлекательной для туристов и бизнесменов.',
                srcImg: RomePhoto},
            { title: 'Минск-Лондон: прямые рейсы со скидками для ранних бронирований', date: '21-01-2024',
             description:'Новая программа авиаперевозок предлагает пассажирам прямые рейсы из Минска в Лондон с возможностью бронирования по сниженной цене. Это отличная возможность для деловых поездок и туризма, особенно для тех, кто планирует путешествие заранее.',
            srcImg: londonImage },
            { title: 'Берлин готовится к авиашоу: крупнейшее событие года', date: '15-08-2024',
                description:'Ежегодное авиашоу в Берлине обещает стать самым зрелищным событием года. Ожидаются демонстрационные полёты новейших моделей авиалайнеров, выставки авиационной техники и презентации инновационных решений для авиаперелётов будущего.',
                srcImg: BerlinPhoto },
              { title: 'Токио вводит сверхскоростные авиаперелёты', date: '10-09-2024',
                description:'Япония запускает проект сверхскоростных пассажирских самолётов. Эти лайнеры смогут покрывать огромные расстояния в рекордно короткие сроки, что революционизирует глобальные путешествия и уменьшает время полёта между континентами.',
                srcImg: tokyoImage}
        ]);
    
      
    const [valueCard, SetValue] = useState<string>("");

     const filterCard = useMemo(() => {
        return cards.filter(card =>
            card.title.toLowerCase().includes(valueCard.toLowerCase())
        );
    }, [valueCard, cards]);


  

    return (
        <section className="font-inter dark:text-white">
            <div className="flex flex-col gap-5 sm:flex-row sm:gap-0 justify-between mb-8 items-center">
                <h1 className="title  text-2xl md:text-4xl font-semibold font-montserrat">Новости</h1>
                <Input title={valueCard} callback={(event)=>(SetValue(event.target.value))}/>
            </div>
            <div className="container grid grid-cols-1 gap-y-4 gap-x-5 sm:grid-cols-2  lg:grid-cols-3 lg:gap-x-8 lg:gap-y-6">
                {
                    filterCard.map((card,index)=> {
                        return (
                            <CardNews title={card.title} key={index} date={card.date} srcImg={card.srcImg} description={card.description}/>
                        )
                    })
                }
            </div>
        </section>
    );
}
export default News;