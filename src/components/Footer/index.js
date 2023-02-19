import React from "react";
import Logo from "../assests/images/Logo.svg";
import twitterIcon from "../assests/images/icon-twitter.svg";
import telegramIcon from "../assests/images/icon-telegram.svg";
import "./style.css";

export default function Footer() {
  const handleClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="Footer">
      <div className="footerWrapper1">
        <a href="home" onClick={(e) => handleClick(e, "home")}>
          <img src={Logo} alt="logo" />
        </a>
        <div className="iconWrapper">
          <div className="socialIcons">
            <a href="https://twitter.com/AIverseToken">
              <img src={twitterIcon} alt="twitter-icon" />
            </a>
            <a href="https://t.me/AIverse_global">
              <img src={telegramIcon} alt="telegram-icon" />
            </a>
          </div>
          <div className="FooterTxt1">@2023 AIverse. All Rights Reserved.</div>
        </div>
      </div>
      <div className="FooterTxt2">@2023 AIverse. All Rights Reserved.</div>
    </div>
  );
}
