import React from 'react';
import Logo from "../assests/images/Logo.svg";
import "./style.css";

export default function Footer()
{
    return (
        <div className='Footer'>
            <img src={Logo} alt="logo"/> 
        </div>
    );
}