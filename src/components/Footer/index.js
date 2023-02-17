import React from 'react';
import Logo from "../assests/images/Logo.svg";
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
            <a href='home' onClick={(e) => handleClick(e, "home")}>
                <img src={Logo} alt="logo"/> 
            </a>
        </div>
    );
}