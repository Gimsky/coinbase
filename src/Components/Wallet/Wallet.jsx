import React, { Component } from "react";
import imgEth from './../../img/eth.png';
import imgEth2 from './../../img/eth-2.png';
import imgMkr from './../../img/mkr.png';
import imgZrx from './../../img/zrx.png';
import imgGno from './../../img/gno.png';
import styleModal from './../../styles/modal.module.css'
import styleAnimation from './../../styles/animation.module.css'
import styleWaller from './wallet.module.css'


export default class Wallet extends Component {

    render() {
        return (
            <div className={`
                    ${styleModal.modal__inner}
                    ${styleModal['modal__inner--colored']}
                `}
                id="inner-9">
                <div className={styleModal.content}>
                    <div className="content__block">
                        <div className={styleWaller.user__title}>@username</div>
                        <button className={styleWaller.reset}></button>
                        <div className={styleWaller.price}>$0.00</div>
                        <div className={styleWaller.links__block}>
                            <a href="#" className={styleWaller.link}>Send</a>
                            <a href="#" className={styleWaller.link}>Receive</a>
                        </div>
                    </div>
                    <div className={` ${styleModal.content__footer}  ${styleModal['content__footer--bottom']}`}>
                        <div className={`
                            ${styleWaller.tabs__block}
                            ${styleAnimation.animated}
                            ${styleAnimation.fadeInUp}
                            ${styleAnimation.delay1}
                        `}>
                            <input className={styleModal.radio} id="one" name="group" type="radio" checked />
                            <input className={styleModal.radio} id="two" name="group" type="radio" />
                            <div className={styleWaller.panels} id="panels">
                                <div className={styleWaller.tabs}>
                                    <label className={styleWaller.tab} id="one-tab" htmlFor="one">Coins</label>
                                    <label className={styleWaller.tab} id="two-tab" htmlFor="two">Collectibles</label>
                                </div>
                                <div className={styleWaller.panel} id="one-panel">
                                    <div className={styleWaller.panel__row}>
                                        <img src={imgEth} alt="" />
                                        <div className={`
                                                ${styleWaller.panel__cell}
                                                ${styleWaller['panel__cell--name']}
                                            `}>
                                            Ethereum
                                            <span>ETH</span>
                                        </div>
                                        <div className={`
                                                ${styleWaller.panel__cell}
                                                ${styleWaller['panel__cell--price']}
                                            `}>
                                            $2,329.92
                                            <span className={styleWaller['panel__price--green']}>+3.36%</span>
                                        </div>
                                    </div>

                                    <div className={styleWaller.panel__row}>
                                        <img src={imgEth2} alt="" />
                                        <div className={`
                                                ${styleWaller.panel__cell}
                                                ${styleWaller['panel__cell--name']}
                                            `}>
                                            Ethereum
                                            <span>ETH</span>
                                        </div>
                                        <div className={`
                                                ${styleWaller.panel__cell}
                                                ${styleWaller['panel__cell--price']}
                                            `}>
                                            $7.58
                                            <span className={styleWaller['panel__price--green']}>+3.05%</span>
                                        </div>
                                    </div>

                                    <div className={styleWaller.panel__row}>
                                        <img src={imgMkr} alt="" />
                                        <div className={`${styleWaller.panel__cell} ${styleWaller['panel__cell--name']}`}>
                                            Maker
                                            <span>MKR</span>
                                        </div>
                                        <div className={`
                                                ${styleWaller.panel__cell}
                                                ${styleWaller['panel__cell--price']}
                                            `}>
                                            $3,488.86
                                            <span className={styleWaller['panel__price--red']}>-7.14%</span>
                                        </div>
                                    </div>

                                    <div className={styleWaller.panel__row}>
                                        <img src={imgZrx} alt="" />
                                        <div className={`${styleWaller.panel__cell} ${styleWaller['panel__cell--name']}`}>
                                            Ethereum
                                                <span>ETH</span>
                                        </div>
                                        <div className={`
                                                ${styleWaller.panel__cell}
                                                ${styleWaller['panel__cell--price']}
                                            `}>
                                            $2.08
                                            <span className={styleWaller['panel__price--green']}>+0.44%</span>
                                        </div>
                                    </div>

                                    <div className={styleWaller.panel__row}>
                                        <img src={imgGno} alt="" />
                                        <div className={`${styleWaller.panel__cell} ${styleWaller['panel__cell--name']}`}>
                                            Ethereum
                                        <span>ETH</span>
                                        </div>
                                        <div className={`
                                                ${styleWaller.panel__cell}
                                                ${styleWaller['panel__cell--price']}
                                            `}>
                                            $180.98
                                        <span className={styleWaller['panel__price--green']}>+1.57%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styleWaller.panel} id="two-panel">
                                    <div className={styleWaller.panel__empty}>
                                        No Collectibles Yet!
                                        <div>
                                            Explore new collectibles <br />
                                            in the Dapps tab
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

