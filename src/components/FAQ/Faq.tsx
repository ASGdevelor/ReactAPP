
import React from "react";
import Acordion from "./Acordion";

const Faq: React.FC = () => {
    return (
        <section>
            <div className="font-inter dark:text-white">
                <h1 className='title text-left  text-2xl md:text-4xl mb-12 font-semibold font-montserrat'>Часто задаваемые вопросы</h1>
                <div className='content flex flex-col gap-y-7 grid-flow-row'>
                <Acordion title="Какие услуги предоставляет авиакомпания?" subtitle="Мы специализируемся на предоставлении чартерных рейсов, VIP-перевозок, корпоративных перелётов, а также организации грузовых авиаперевозок. 
                Наш подход ориентирован на индивидуальные потребности каждого клиента." clsBut="w-4 hidden sm:block"/>

                 <Acordion title="Можно ли заказать рейс в нестандартное направление?" subtitle="Да, мы готовы организовать перелёт практически в любое место мира,
                  учитывая ваши пожелания и маршрутные особенности." clsBut="w-4 hidden sm:block"/>

                 <Acordion title="Какая безопасность обеспечивается?" subtitle="Мы следуем строгим стандартам безопасности,
                  регулярному техническому обслуживанию самолётов и обучению экипажа,
                  чтобы гарантировать ваше спокойствие в полёте." clsBut="w-4 hidden sm:block"/>

                <Acordion title="Какая безопасность обеспечивается?" subtitle="Мы следуем строгим стандартам безопасности,
                  регулярному техническому обслуживанию самолётов и обучению экипажа,
                  чтобы гарантировать ваше спокойствие в полёте." clsBut="w-4 hidden sm:block"/>

                </div>
            </div>
        </section>
    );
}

export default Faq;