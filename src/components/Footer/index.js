import React from 'react';
import Logo from "../assests/images/Logo.svg";
import discordIcon from "../assests/images/icon-discord.svg";
import telegramIcon from "../assests/images/icon-telegram.svg";
import "./style.css";

export default function Footer()
{

    const handleClick = (event, id) => {
        event.preventDefault();
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='Footer'>
            <div className='footerWrapper1'>

            <a href='home' onClick={(e) => handleClick(e, "home")}>
                <img src={Logo} alt="logo"/> 
            </a>
            <div className='iconWrapper'>
            <div className='socialIcons'>
                <img src={discordIcon} alt="discord-icon"/>
                <img src={telegramIcon} alt="telegram-icon"/>
            </div>
            <div className='FooterTxt1'>
                @2023 AIverse. All Rights Reserved.
            </div>
            </div>
            </div>
            <div className="FooterTxt2">
                @2023 AIverse. All Rights Reserved.
            </div>
        </div>
    );
}