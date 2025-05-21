import React from "react";
import { Link } from "react-router-dom";

import telegramIcon from '../../../src/components/footer/assets/telegram.png';
import instagramIcon from '../../../src/components/footer/assets/instagram.png';
import facebookIcon from '../../../src/components/footer/assets/facebook.png';


const Footer:React.FC=()=> {
     
    return (
        <footer className="my-7 flex items-center justify-between font-inter dark:text-white">
                <ul className="group1 flex items-center justify-start gap-2 sm:gap-6">
                    <li className="iten"><Link to="/about">О компании</Link></li>
                    <li className="iten"><Link to="/faq">FAQ</Link></li>
                </ul>
                <div className="group2 flex items-center justify-end gap-0.5">
                    <div className="iten"><Link to="/errorPage"><img src={telegramIcon} alt="telegram" className="iten__icon" /></Link></div>
                    <div className="iten"><Link to="/errorPage"><img src={instagramIcon} alt="instagram" className="iten__icon" /></Link></div>
                    <div className="iten"><Link to="/errorPage"><img src={facebookIcon} alt="facebook" className="iten__icon"/></Link></div>
                </div>
        </footer>
    );
}
export default Footer;
