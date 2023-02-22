import React, { useEffect } from "react";
// import chart from "../assests/images/icon-chart.svg";
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
// import sparkleIcon1 from "../assests/images/icon-sparkle1.svg";
import sparkleIcon2 from "../assests/images/icon-sparkle2.svg";
import sparkleIcon3 from "../assests/images/icon-sparkle3.svg";
import sparkleIcon4 from "../assests/images/icon-sparkle4.svg";
import sparkleIcon5 from "../assests/images/icon-sparkle5.svg";
import roadmapImg from "../assests/images/icon-roadmap.svg";
import AOS from "aos";
import "aos/dist/aos.css";

import "./style.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CircularProgressBar from "../CircularProgressBar";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const handleDragStart = (e) => e.preventDefault();
  // const options = {
  //   threshold: 0,
  //   rootMargin: "0px 0px -200px 0px",
  // };
  // useEffect(() => {
  //   const faders = document.querySelectorAll(".faders");
  //   const observers = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("fade-in");
  //       }
  //     });
  //   }, options);
  //   faders.forEach((fader) => {
  //     observers.observe(fader);
  //   });
  //   return () => {
  //     faders.forEach((fader) => {
  //       observers.unobserve(fader);
  //     });
  //   };
  // });

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
        <div id="home" className="mainWrapper1 faders" data-aos="fade-up">
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
          <img src={aiImg1} alt="ai-img" className="float-img" />
          <img className="aiImg4" src={aiImg4} alt="ai-img" />
        </div>
      </div>

      <div className="backdropDiv2">
        <div className="mainWrapper2 faders">
          <div className="binanceDiv">
            <AliceCarousel
              items={items}
              responsive={responsive}
              autoPlay
              autoPlayInterval={1000}
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
          <div id="about" className="aboutWrapper faders" data-aos="fade-up">
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
          <div className="goalWrapper faders" data-aos="fade-up">
            {/* <div className='eclipseDiv'></div> */}
            <div>
              <img className="sparkleIcon5" src={sparkleIcon5} alt="sparkle" />
              <img className="sparkleIcon3" src={sparkleIcon3} alt="sparkle" />
              <div className="aboutTitle">The goal is to</div>
              <div className="sparkleCirclebg4"></div>
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
          <div
            id="tokenomics"
            className="tokenomicsWrapper faders"
            data-aos="fade-up"
          >
            <div className="tokenomics">
              <div className="tokenomicsFeatures">
                <div className="headingUnderlineWrapper">
                  <div className="tokenomicsTitle">Token name: Alverse</div>
                  <div className="tokenomicsTxt">Tokenomics</div>
                </div>
                <div className="tokenomics-boxes">
                  <div className="tokenomics-box">
                      <p>Ticker Symbol</p>
                      <h1>$AIV</h1>
                  </div>
                  <div className="tokenomics-box">
                  <p>Blockchain</p>
                    <h1>Binance Smart Chain (BEP-20)</h1>
                  </div>
                  <div className="tokenomics-box">
                    <p>Total Supply </p>
                    <h1>100 Million (100,000,000)</h1>
                  </div>
                  <div className="tokenomics-box">
                    <p>Token tax</p>
                    <h1>0% Tax</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="progress-bar">

              <div className="progress-bar-container">
                <div className="loader">
                  <CircularProgressBar
                    percentage={23}
                    circleWidth={"150"}
                    color="#EF5410"
                  />
                </div>
                <div>
                  <h1>Liquidity</h1>
                  <p></p>
                </div>
              </div>
              <div className="progress-bar-container">
                <div className="loader">
                  <CircularProgressBar
                    percentage={10}
                    circleWidth={"150"}
                    color="#ff710a"
                    className="loader"
                  />
                </div>
                <div>
                  <h1>Staking Reward</h1>
                  <p>
                    {"("}Unlocked in April 2023{")"}
                  </p>
                </div>
              </div>
              <div className="progress-bar-container">
                <div className="loader">
                  <CircularProgressBar
                    percentage={10}
                    circleWidth={"150"}
                    color="#ff9d0a"
                    className="loader"
                  />
                </div>
                <div>
                  <h1>CEX Listing Tokens</h1>
                  <p>
                    {"("}Unlocked in June 2023{")"}
                  </p>
                </div>
              </div>

              <div className="progress-bar-container">
                <div className="loader">
                  <CircularProgressBar
                    percentage={10}
                    circleWidth={"150"}
                    color="#ffba0a"
                    className="loader"
                  />
                </div>
                <div>
                  <h1>Al Development Reserve</h1>
                  <p>
                    {"("}Unlocked in June 2023{")"}
                  </p>
                </div>
              </div>
              <div className="progress-bar-container">
                <div className="loader">
                  <CircularProgressBar
                    percentage={5}
                    circleWidth={"150"}
                    color="white"
                    className="loader"
                  />
                </div>
                <div>
                  <h1>Team</h1>
                  <p>
                    {"("}Unlocked in April 2023{")"}
                  </p>
                </div>
              </div>
              <div className="progress-bar-container">
                <div className="loader">
                  <CircularProgressBar
                    percentage={41}
                    circleWidth={"150"}
                    color="#d82d18"
                    className="loader"
                  />
                </div>
                <div>
                  <h1>Fair Launch Tokens</h1>
                  <p></p>
                </div>
              </div>

            </div>
            <div className="sparkleCirclebg3"> </div>
          </div>
          <div className="roadmap" data-aos="fade-up">
            <div className="roadmapHeadingWrapper">
                <div className="roadmapHeading">Roadmap</div>
                <div className="styledUnderline"></div>
              </div>
              <div className="stageWrapper">

              <div className="stageLeft">
              <div className="sparkleCirclebg1"> </div>
              <div className="stage1">
                    <ul className="stageList">
                      <li>PR work for AI verse</li>
                      <li>Strategic sponsorships</li>
                      <li>Capital unions</li>
                      <li> More exchange listings</li>
                    </ul>
                </div>
              
              </div>
              <img className="roadmapImg" src={roadmapImg} alt="roadmapImg"/>
              <div className="stageRight">
              <div className="stage2">
                    <ul className="stageList">
                      <li>Creation of AI Verse</li>
                      <li>Pinksale presale global marketing and asian market</li>
                      <li>CMC and CG listing</li>
                    </ul>
                </div>
                <div className="stage3">
                    <ul className="stageList">
                      <li>AI Verse site update</li>
                      <li>AI Verse NFT market</li>
                      <li>1-25 CEX listing</li>
                      <li>Roadmap improvements</li>
                    </ul>
                </div>
                <div className="sparkleCirclebg2"> </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
