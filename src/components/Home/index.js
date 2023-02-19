import React from "react";
import chart from "../assests/images/icon-chart.svg";
import bnbIcon from "../assests/images/icon-bnb.svg";
import pinksaleIcon from "../assests/images/icon-pinksale.svg";
import coinmarketcapIcon from "../assests/images/icon-coinmarketcap.svg";
import coingeckoIcon from "../assests/images/icon-coingecko.svg";
import pancakeswapIcon from "../assests/images/icon-pancakeswap.svg";
import coinsultIcon from "../assests/images/icon-coinsult.svg";
import matrixlabsIcon from "../assests/images/icon-matrixlabs.svg";
import aiImg1 from "../assests/images/icon-ai-img1.svg";
import aiImg2 from "../assests/images/icon-ai-img2.svg";
import aiImg4 from "../assests/images/icon-ai-img4.svg";
import sparkleIcon1 from "../assests/images/icon-sparkle1.svg";
import sparkleIcon2 from "../assests/images/icon-sparkle2.svg";
import sparkleIcon3 from "../assests/images/icon-sparkle3.svg";
import sparkleIcon4 from "../assests/images/icon-sparkle4.svg";
import sparkleIcon5 from "../assests/images/icon-sparkle5.svg";

import "./style.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Home() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      src={bnbIcon}
      className="bnbIcon"
      alt="binance-icon"
      onDragStart={handleDragStart}
    />,
    <img
      src={pinksaleIcon}
      alt="pinksale-icon"
      onDragStart={handleDragStart}
    />,
    <img
      src={coinmarketcapIcon}
      className="coinmarketcapIcon"
      alt="coinmarketcap-icon"
      onDragStart={handleDragStart}
    />,
    <img
      src={coingeckoIcon}
      alt="coingecko-icon"
      onDragStart={handleDragStart}
    />,
    <img
      src={matrixlabsIcon}
      className="matrixlabsIcon"
      alt="matrixlabs-icon"
      onDragStart={handleDragStart}
    />,
    <img
      src={pancakeswapIcon}
      className="pancakeswapIcon"
      alt="pancakeswap-icon"
      onDragStart={handleDragStart}
    />,
    <img
      src={coinsultIcon}
      className="coinsultIcon"
      alt="coinsult-icon"
      onDragStart={handleDragStart}
    />,
  ];

  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1200: { items: 3 },
    1500: { items: 5 },
  };

  return (
    <>
      <div className="backdropDiv1">
        <div className="eclipseDiv"></div>
        <div id="home" className="mainWrapper1">
          <div className="titleContent">
            <div>
              <div className="titleName">AI VERSE</div>
              <div className="mainHeadingTxt">
                Next-Gen&nbsp;AI
                <br />
                <div className="gradientTxt">Investment</div>Platform
              </div>
            </div>
            <div className="titleInfo">
              AIverse is an artificial intelligence platform developed based
              <br />
              on blockchain core technology.
            </div>
            <div className="btn1">Buy&nbsp;Token</div>
          </div>
          <img src={aiImg1} alt="ai-img" />
          <img className="aiImg4" src={aiImg4} alt="ai-img" />
        </div>
      </div>

      <div className="backdropDiv2">
        <div className="mainWrapper2">
          <div className="binanceDiv">
            <AliceCarousel
              items={items}
              responsive={responsive}
              autoPlay
              autoPlayInterval={2000}
              animationDuration={1000}
              disableButtonsControls
              disableDotsControls
              mouseTracking
              infinite
              animationType="fadeout"
              paddingLeft={24}
              paddingRight={24}
              itemPosition="center"
              stagePadding={{ paddingLeft: 60, paddingRight: 60 }}
              slideToIndex={0}
              dotsDisabled
              buttonsDisabled
            />
          </div>
          <div id="about" className="aboutWrapper">
            <img src={aiImg2} alt="ai-img" />
            <div className="aboutDiv">
              <div>
                <div className="aboutTitle">About us</div>
                <div className="aboutMainTxtheading">
                  AI VERSE functions as&nbsp;an
                </div>
              </div>
              <div className="aboutMainTxt1">
                Artificial intelligence investment advisor which supports
                on-chain transactions of DeFi products, decentralized AI
                evaluation of wealth management products, liquidity mining,
                private, and presale risk Smart evaluation
              </div>
              <div className="aboutMainTxt2">
                The current test version only supports Bsc, which will be
                launched in March
              </div>
              <img className="sparkleIcon4" src={sparkleIcon4} alt="sparkle" />
            </div>
          </div>
          <div className="goalWrapper">
            {/* <div className='eclipseDiv'></div> */}
            <div>
              <img className="sparkleIcon5" src={sparkleIcon5} alt="sparkle" />
              <img className="sparkleIcon3" src={sparkleIcon3} alt="sparkle" />
              <div className="aboutTitle">The goal is to</div>
              <div className="aboutMainTxtheading">
                Implement a machine learning platform
              </div>
            </div>
            <div className="aboutMainTxt1">
              That allows users to post tasks on the platform, submit models,
              make inferences by invoking smart contracts, and create their own
              AI DApps
            </div>
            <div className="aboutMainTxt2">
              Artificial intelligence decentralized applications are expected to
              go live in June
            </div>
            <img className="sparkleIcon2" src={sparkleIcon2} alt="sparkle" />
          </div>
          <div id="tokenomics" className="tokenomicsWrapper">
            <div className="tokenomics">
              <div className="tokenomicsFeatures">
                <div className="headingUnderlineWrapper">
                  <div className="tokenomicsTxt">Tokenomics</div>
                </div>
                <div className="tokenomicsInfoTxt">
                  <div>
                    Token name:{" "}
                    <span className="highlightedTxt">
                      &nbsp;&nbsp;&nbsp;AIverse
                    </span>
                  </div>
                  <ul className="list">
                    <li>
                      Ticker Symbol: <b>$AIV</b>
                    </li>
                    <li>
                      Blockchain: <b>Binance Smart Chain (BEP-20)</b>
                    </li>
                    <li>
                      Total Supply: <b>100 Million (100,000,000)</b>
                    </li>
                    <li>
                      Token tax: <b>0% Tax</b>
                    </li>
                  </ul>
                </div>
                <img
                  className="sparkleIcon1"
                  src={sparkleIcon1}
                  alt="sparkle"
                />
              </div>
              {/* <div className='optionsGrid'>
                    <div className='gridCol'>
                        <div className='option'>
                            <div className='optionColoredDivs optionColorDiv1'></div>
                            <div>Fair Launch tokens</div>
                        </div>
                        <div className='option'>
                            <div className='optionColoredDivs optionColorDiv2'></div>
                            <div>Liquidity</div>
                        </div>
                        <div className='option'>
                            <div className='optionColoredDivs optionColorDiv3'></div>
                            <div className='optionsdiv'>
                                <div>Staking Reward</div>
                                <div className='unlockedTxt'>(Unlocked in April 2023)</div>
                            </div>
                        </div>
                    </div>
                <div className='gridCol'>
                    <div className='option'>
                            <div className='optionColoredDivs optionColorDiv4'></div>
                            <div className='optionsdiv'>
                                <div>CEX Listing Tokens</div>
                                <div className='unlockedTxt'>(Unlocked in April 2023)</div>
                            </div>
                        </div>
                        <div className='option'>
                            <div className='optionColoredDivs optionColorDiv5'></div>
                            <div className='optionsdiv'>
                                <div>AI Development Reserve</div>
                                <div className='unlockedTxt'>(Unlocked in June 2023)</div>
                            </div>
                        </div>
                        <div className='option'>
                            <div className='optionColoredDivs optionColorDiv6'></div>
                            <div className='optionsdiv'>
                                <div>Team</div>
                                <div className='unlockedTxt'>(Unlocked in June 2023)</div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <img src={chart} alt="chart" />
          </div>
        </div>
      </div>
    </>
  );
}
