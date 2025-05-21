
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import profileImage from '../../../src/components/header/assets/profile.png';

import Burger from './Burger';

import ThemeSwitcher from "../TemaSwitch/ThemeSwicher";

import Button from "./button";





const Header: React.FC = () => {

        const navigate = useNavigate();
        const handleNavigation = () => {
                navigate("/authorization");
        };

        const [isOpen, setOpen] = useState(false);
        return (

                <header>

                        <div className="container flex items-center justify-between py-8 w-full 2xl:gap-80 mb-8">
                                <div className="flex dark:text-white">
                                        <span className="nav__logo block mr-9 font-montserrat font-semibold"><Link to="/">ALEXAIRLINE</Link></span>
                                        <div className="hidden lg:block">
                                                <ul className="container nav flex items-center gap-9 w-auto whitespace-nowrap">
                                                        <li className="nav__iten block"><Link to="/popular">Популярные рейсы</Link></li>
                                                        <li className="nav__iten block"><Link to="/catalog">Каталог билетов</Link></li>
                                                        <li className="nav__iten block"><Link to="/news">Новости</Link></li>
                                                </ul>
                                        </div>
                                </div>
                                <div className="container flex items-center justify-end gap-3 w-full"> 
                                        <Button title="Зарегистрироваться" cls="button hidden px-10 py-2 bg-substrateWhite dark:bg-darkSubstrate dark:text-white w-60 text-center rounded-50px lg:block" callback={handleNavigation} />
                                        <div className="icon__iten"><Link to="/profile"><img src={profileImage} alt="profile" className="iten__image" /></Link></div>
                                        <ThemeSwitcher/>
                                        <Burger cls="flex flex-col lg:hidden" callback={() => setOpen(!isOpen)} />
                                </div>
                        </div>
                        {isOpen &&
                                <ul className="container flex flex-col items-center gap-9 w-auto whitespace-nowrap dark:text-white lg:hidden">
                                        <li className="nav__iten block"><Link to="/popular">Популярные рейсы</Link></li>
                                        <li className="nav__iten block"><Link to="/catalog">Каталог билетов</Link></li>
                                        <li className="nav__iten block  mb-5"><Link to="/news">Новости</Link></li>
                                </ul>
                        }
                </header>

        );
}
export default Header;