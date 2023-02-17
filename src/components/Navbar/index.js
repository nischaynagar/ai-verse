import React, {  useRef, useState } from 'react';
import "./style.css";
import {ReactComponent as Menu}from "../assests/images/icon-hamburger.svg";
import {ReactComponent as CloseIcon} from "../assests/images/icon-close.svg";
import menuIcon from "../assests/images/icon-menu.svg";
import Logo from "../assests/images/Logo.svg";

export default function Navbar(props) {
  const [menu, setmenu] = useState(false);
  const myNav = useRef();
  const myLogo = useRef();
  const myList = useRef();
 

  function toggleIcon(){
    const primaryNav = document.querySelector(".primary-navigation");
    const primaryHeader = document.querySelector(".primary-header");
    const primaryButton = document.querySelector(".toggleDisplay");
    if(menu){
      setmenu(false);
    }
    else{
      setmenu(true);
    }
    primaryNav.toggleAttribute("data-visible");
    primaryButton.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");  
  }
  

  return (
      <>
          <div className="nav-wrapper" id='nav-wrapper' ref={myNav}>
            <div className="logo" ref={myLogo}>
              <img src={Logo} alt="Manage" />
            </div>
            <nav className="primary-navigation">
              <ul className="nav-list" aria-label="Primary" id="primary-navigation" ref={myList}>
                <li>Home</li>
                <li>About us</li>
                <li>Tokenomics</li>
                <li className='toggleDisplay'><button  className="button">Buy&nbsp;Now</button></li>
              </ul>
            </nav>
            <div  className="button display-sm-hidden display-md-inline-flex">Dapps</div>
            <img onClick={()=>setmenu(!menu)} className='menuIcon' src={menuIcon}  alt="menu-icon" />
          </div>
      </>
    )
  }