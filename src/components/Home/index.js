import React from 'react';
import chart from "../assests/images/icon-chart.svg" ;
import bnbIcon from "../assests/images/icon-bnb.svg";
import pinksaleIcon from "../assests/images/icon-pinksale.svg";
import coinmarketcapIcon from "../assests/images/icon-coinmarketcap.svg";
import aiImg1 from "../assests/images/icon-ai-img1.svg";
import aiImg2 from "../assests/images/icon-ai-img2.svg";
import "./style.css";
export default function Home()
{
    return (
        <>
        <div className='backdropDiv1'>
            <div className='eclipseDiv'></div>
            <div className='mainWrapper1'>

            <div className='titleContent'>
                <div>
                    <div className='titleName'>AI VERSE</div>
                    <div className='mainHeadingTxt'>Next-Gen&nbsp;AI<br/><div className='gradientTxt'>Investment</div>Platform</div>
                </div>
                <div className='titleInfo'>AIverse is an artificial intelligence platform developed based<br/>on blockchain core technology.</div>
                <div className='btn1'>Buy&nbsp;Token</div>
            </div>
            <img src={aiImg1} alt="ai-img"/>
            </div>
        </div>
            
            
        <div className='backdropDiv2'>
        <div className='mainWrapper2'>
        <div className='binanceDiv'>
                <img className='binanceDivImg' src={bnbIcon} alt="binance-icon" />
                <img className='binanceDivImg coinIcon' src={coinmarketcapIcon} alt="coinmarketcapIcon-icon" />
                <img className='binanceDivImg pinkIcon' src={pinksaleIcon} alt="pinksaleIcon-icon" />
                <img className='binanceDivImg' src={bnbIcon} alt="bnbIcon-icon" />
        </div>
        <div className='aboutWrapper'>
            <img src={aiImg2} alt="ai-img"/>
            <div className='aboutDiv'>
                <div>
                    <div className='aboutTitle'>About us</div>
                    <div className='aboutMainTxtheading'>AI VERSE functions as&nbsp;an</div>
                </div>
                <div className='aboutMainTxt1'>Artificial intelligence investment advisor which supports on-chain transactions of DeFi products, decentralized AI evaluation of wealth management products, liquidity mining, private, and presale risk Smart evaluation</div>
                <div className='aboutMainTxt2'>The current test version only supports Bsc, which will be launched in March</div>
            </div>
        </div>
        <div className='goalWrapper'>
            <div className='eclipseDiv'></div>
            <div>
                <div className='aboutTitle'>The goal is to</div>
                <div className='aboutMainTxtheading'>Implement a machine learning platform</div>
            </div>
            <div className='aboutMainTxt1'>That allows users to post tasks on the platform, submit models, make inferences by invoking smart contracts, and create their own AI DApps</div>
            <div className='aboutMainTxt2'>Artificial intelligence decentralized applications are expected to go live in June</div>
        </div>
            <div className='tokenomicsWrapper'>
                <div className='tokenomics'>
                <div className='tokenomicsFeatures'>
                    <div className='headingUnderlineWrapper'>
                        <div className='tokenomicsTxt'>Tokenomics</div>
                    </div>
                    <div className='tokenomicsInfoTxt'>
                        <div>Token name: <span className='highlightedTxt'>AIverse</span></div>
                        <div>- Ticker Symbol: <b>$AIV</b></div>
                        <div>- Blockchain: <b>Binance Smart Chain (BEP-20)</b></div>
                        <div>- Total Supply: <b>100 Million (100,000,000)</b></div>
                        <div>- Token tax: <b>0% Tax</b></div>
                    </div>
                </div>
                <div className='optionsGrid'>
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
                </div>
                </div>
                <img src={chart} alt="chart"/>
            </div>
        </div>
        </div>
        </>
    );
}